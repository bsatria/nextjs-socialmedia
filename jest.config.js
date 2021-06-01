module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/lib/",
    "<rootDir>/coverage/",
    "<rootDir>/server.js",
    "<rootDir>/cypress",
    "<rootDir>/jest.setup.js"
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
