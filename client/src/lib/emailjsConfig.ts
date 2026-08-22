export type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

type EmailJsEnvironment = Record<string, string | undefined>;

/** Returns browser-safe EmailJS configuration only when every required identifier is set. */
export function resolveEmailJsConfig(env: EmailJsEnvironment): EmailJsConfig | null {
  const serviceId = env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) return null;

  return { serviceId, templateId, publicKey };
}
