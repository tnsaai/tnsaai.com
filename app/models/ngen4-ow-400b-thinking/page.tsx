import { NGen4OWModelPage } from '@/components/ui/NGen4OWModelPage'

export default function NGen4OW400BThinkingPage() {
    return (
        <NGen4OWModelPage
            title="NGen-4-OW-400B-Thinking"
            imageSrc="https://raw.githubusercontent.com/tnsaai/images-urls/refs/heads/main/ngen4ow400b.png"
            imageAlt="NGen-4-OW-400B-Thinking"
            huggingFaceUrl="https://huggingface.co/TNSA/NGen-4-OW-400B-Thinking"
            releaseNoteParagraphs={[
                'This model is a fine-tuned derivative of the NGen-4 Pro model. We have distilled deep Indic Knowledge into the Qwen 3.5 397B Base model.',
                'A Quick Update to the community this Model is completely functional with the Original Architecture, but for Indic Performance using NGen-4-OW-ForCasualLM can be prefered.',
                'Please note that this model may not perform as expected with Qwen 3.5\'s original architecture. For best outputs, please use the custom NGen-4-OW-ForCasualLM architecture. The weights for this model are already open-sourced, and the codebase for the architecture will be soon open-sourced.',
            ]}
            finalDisclaimer="This specific model release (the Qwen 3.5 Base Indic distillation operating on NGen-4-OW-ForCasualLM) is released purely for Research and Academic purposes. Commercial use is not permitted under this specific license."
        />
    )
}
