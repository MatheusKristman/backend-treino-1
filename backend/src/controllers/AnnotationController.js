const Annotations = require("../models/AnnotationData");

module.exports = {
  read: async (req, res) => {
    const annotationList = await Annotations.find();

    return res.json(annotationList);
  },
  create: async (req, res) => {
    const { title, notes, priority } = req.body;

    if (!notes || !title) {
      return res.status(400).json({ error: "Necessário um título/anotação" });
    }

    const annotationCreated = await Annotations.create({ title, notes, priority });

    return res.json(annotationCreated);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

    if (annotationDeleted) {
      return res.json(annotationDeleted);
    }

    return res.status(401).json({ error: "Não foi encontrado o registro para deletar!" });
  },
};
