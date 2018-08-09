export default {
  redux: {
    enableLogger: process.env.NODE_ENV === "development",
    enableDevTools: process.env.NODE_ENV === "development"
  }
};
