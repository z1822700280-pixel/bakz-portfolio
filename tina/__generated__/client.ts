import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: 'E:/BAKZ/opencode/bakz-portfolio/tina/__generated__/.cache/1779424451263', url: 'https://content.tinajs.io/2.4/content/local-dev/github/main', token: 'local-dev-token', queries,  });
export default client;
  