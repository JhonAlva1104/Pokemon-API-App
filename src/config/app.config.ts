
export const EnvConfiguration = () => ({
    environtment: process.env.NODE_ENV || 'ENV',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3000,
    defaultLimit: Number(process.env.DEFAULT_LIMIT) || 7,
})