/**
 * Where form submissions are delivered when Resend is not configured.
 * FormSubmit.co sends form contents to this address (browser-side POST).
 * After the first submission, FormSubmit emails a one-time activation link
 * to this address — it must be confirmed before messages are delivered.
 */
export const DELIVERY_EMAIL = "homeherohandymanllc@gmail.com";
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${DELIVERY_EMAIL}`;
