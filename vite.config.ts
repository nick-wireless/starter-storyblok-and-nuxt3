import { UserConfig, defineConfig } from 'vite'

const configuration: UserConfig = {
    optimizeDeps: {
        exclude: ["fsevents"]
    },
}

export default defineConfig(configuration)