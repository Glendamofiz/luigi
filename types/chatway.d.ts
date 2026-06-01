declare global {
  interface Window {
    Chatway?: {
      triggerCustomEvent: (event: string, data: any) => void
    }
  }
}

export {}
