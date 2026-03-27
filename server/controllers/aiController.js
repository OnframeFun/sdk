exports.generateAI = async (req, res) => {
  const { prompt } = req.body;

  try {
    // Simulasi AI (bisa ganti OpenAI API nanti)
    const output = `🔥 AI Idea: Build "${prompt}" as a scalable SaaS with AI automation.`;

    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: "AI generation failed" });
  }
};
