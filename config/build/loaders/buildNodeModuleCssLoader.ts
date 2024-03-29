import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildNodeModulesCssLoader = (isDev: boolean) => {
  return {
    test: /\.css$/,
    include: /node_modules/,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };
};
