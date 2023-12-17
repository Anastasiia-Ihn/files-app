export const checkExtantion = (req, res, next) => {
  const EXTENTIONS = ["js", "jsx", "css", "html", "json"];

  const { fileName } = req.body;
  const findForm = EXTENTIONS.find((el) => fileName.endsWith(el));

  if (!findForm) {
    res.status(400).json({ message: "Formate error" });
  }
  next();
};
