/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "deniswmonteiro",
                mongodb_password: "woftam-corMat-1pipna",
                mongodb_clustername: "cluster0",
                mongodb_database: "blog-contact-dev"
            }
        }
    }

    else {
        return {
            env: {
                mongodb_username: "deniswmonteiro",
                mongodb_password: "woftam-corMat-1pipna",
                mongodb_clustername: "cluster0",
                mongodb_database: "blog-contact"
            }
        }
    }
}

module.exports = nextConfig
