import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguratuions } from "webpack-dev-server";

export function buildDevServer(
  options: BuildOptions
): DevServerConfiguratuions {
  return {
    port: options.port,
    open: true,
  };
}
