import React from "react";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import PurchaseConfirmation from "./emails/PurchaseConfirmation";
import { render } from "@react-email/render";

dotenv.config();

const app = express();
app.use(express.json());

// CORS: permite tu front
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
  }),
);

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_KEY);

app.post("/api/email", async (req, res) => {
  try {
    const { name } = req.body; //to, subject falta
    const htmlBody = render(
      React.createElement(PurchaseConfirmation, { name: name }),
    );
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gustavoesoler0@gmail.com"],
      subject: `${name} prueba`,
      html: htmlBody,
    });

    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err?.message ?? "Error" });
    console.error("EMAIL ERROR: ", err);
  }
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
