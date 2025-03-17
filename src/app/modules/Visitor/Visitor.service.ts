import requestIp from "request-ip";
import useragent from "useragent";
import { Visitor } from "./Visitor.model";

const getUniqueVisitorCount = async (req: any) => {
  const ip = requestIp.getClientIp(req) || "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";
  const agent = useragent.parse(userAgent); // Parse user-agent

  const visitorData = {
    ip,
    browser: agent.family, // Browser name (Chrome, Firefox, etc.)
    os: agent.os.family, // OS name (Windows, macOS, Android, etc.)
    device: agent.device.family || "Unknown", // Device type (iPhone, Samsung, etc.)
    userAgent,
  };

  // Check if the visitor already exists
  let visitor = await Visitor.findOne({ ip });

  if (!visitor) {
    await Visitor.create(visitorData);
  }

  const uniqueCount = await Visitor.countDocuments();
  return { uniqueCount, visitorData };
};

export const VisitorService = {
  getUniqueVisitorCount,
};
