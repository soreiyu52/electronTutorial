module.exports = {
    packagerConfig: {
        asar: true,
    },
    rebuildConfig: {},
    publishers: [
        {
            name: "@electron-forge/publisher-github",
            config: {
                repository: {
                    owner: "soreiyu52",
                    name: "electronTutorial",
                },
                prerelease: false,
                draft: true,
            },
        },
    ],
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                certificateFile: "./cert.pfx",
                certificatePassword: process.env.CERTIFICATE_PASSWORD,
            },
        },
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-auto-unpack-natives",
            config: {},
        },
    ],
};
