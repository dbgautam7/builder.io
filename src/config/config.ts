type CONFIG = {
    BUILDER_IO_API_KEY: string;
};

const local: CONFIG = {
    BUILDER_IO_API_KEY: process.env.NEXT_PUBLIC_BUILDER_IO_API_KEY || '',
};
let config: CONFIG = { BUILDER_IO_API_KEY: '' };
if (process.env.NEXT_PUBLIC_ENV === 'development') {
    config = local;
}

export default config;
