import { NGen4OWModelPage } from '@/components/ui/NGen4OWModelPage'

export default function NGen4OW1TThinkingPage() {
    return (
        <NGen4OWModelPage
            title="NGen-4-OW-1T-Thinking"
            imageSrc="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow1t.png"
            imageAlt="NGen-4-OW-1T-Thinking"
            huggingFaceUrl="https://huggingface.co/TNSA/NGen-4-OW-1T-Thinking"
            releaseNoteParagraphs={[
                'This model is a fine-tuned derivative of the NGen-4 Pro model. We have distilled deep Indic Knowledge into the Kimi-K2 Base model.',
                'Please note that this model may not perform as expected with Kimi-K2\'s original architecture. For best outputs, please use the custom NGen-4-OW-ForCasualLM architecture. The weights for this model are already open-sourced, and the codebase for the architecture will be soon open-sourced.',
            ]}
            finalDisclaimer="This specific model release (the Kimi-K2 Base Indic distillation operating on NGen-4-OW-ForCasualLM) is released purely for Research and Academic purposes. Commercial use is not permitted under this specific license."
        />
    )
}
