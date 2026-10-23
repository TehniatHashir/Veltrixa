const WEB3FORMS_ACCESS_KEY = "984948f9-8835-485d-b441-ec03239ec8c8";
const ENDPOINT = "https://api.web3forms.com/submit";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
};

export async function sendContactForm(payload: ContactPayload): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: payload.subject ?? "New message from Veltrixa website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? "",
      message: payload.message,
    }),
  });

  const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? "We couldn't send your message. Please try again.");
  }
}
