export const whatsappNumber = "554831978198"
export const whatsappDisplay = "(48) 3197-8198"
export const whatsappDefaultMessage = "Olá! Vim pelo site da Nexus e gostaria de falar com o time comercial."

export function buildWhatsappUrl(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
