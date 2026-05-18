import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ResearchSection = {
  title: string
  content?: ReactNode | ReactNode[]
  bullets?: ReactNode[]
}

type RelatedPaper = {
  title: string
  href: string
  category?: string
  date?: string
}

type ResearchPaperPageProps = {
  date: string
  category?: string
  title: string
  deck: ReactNode
  image: string
  imageAlt: string
  imageFit?: 'cover' | 'contain'
  authors?: string[]
  pdfHref?: string
  paperContent?: readonly string[]
  sections?: ResearchSection[]
  children?: ReactNode
  related?: RelatedPaper[]
}

type PaperBlock =
  | {
      type: 'heading'
      level: 2 | 3
      text: string
    }
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'code'
      text: string
    }

const defaultRelated = [
  {
    title: 'Adaptive Sparse Transformer Blocks',
    href: '/research/adaptive-sparse-transformer-blocks',
    category: 'Research Paper',
    date: 'May 25, 2025',
  },
  {
    title: 'Tri-Flux Attention',
    href: '/research/tri-flux-attention',
    category: 'Research Paper',
    date: 'Dec 20, 2025',
  },
  {
    title: 'Quantum Language Models',
    href: '/research/quantum-language-models',
    category: 'Quantum AI',
    date: 'May 22, 2025',
  },
]

function renderContent(content: ReactNode | ReactNode[]) {
  const items = Array.isArray(content) ? content : [content]

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

const proseRepairPairs: Array<[RegExp, string]> = [
  [/\[12pt,a4paper\]article.*$/gi, ''],
  [/section\*Sources used in the report/gi, 'Sources used in the report'],
  [/\bFixed Sparse Patternsare\b/g, 'Fixed Sparse Patterns are'],
  [/\bSparseTransformerBlocknecessitates\b/g, 'Sparse Transformer Block necessitates'],
  [/\bTheImperativeofAdvancedAlgorithmicParadigms\b/g, 'The Imperative of Advanced Algorithmic Paradigms'],
  [/\badvancedAlgorithmicParadigms\b/g, 'advanced algorithmic paradigms'],
  [/\bAcomprehensiveevaluation\b/g, 'A comprehensive evaluation'],
  [/\baccumulationofimprovements\b/g, 'accumulation of improvements'],
  [/\bwhereAIincrementallyacceleratesAIresearchwithoutasudden\b/g, 'where AI incrementally accelerates AI research without a sudden'],
  [/\bcrucialformanagingtherisksassociatedwithRSI\b/g, 'crucial for managing the risks associated with RSI'],
  [/\bheseincludereliablyextractingindicatorsof\b/gi, 'These include reliably extracting indicators of'],
  [/\borunderstandingwhenself\b/g, 'or understanding when self'],
  [/\bAIsystemstoadapttonewsituationswithoutexplicithumaninterventionorreprogramming\b/g, 'AI systems to adapt to new situations without explicit human intervention or reprogramming'],
  [/\bThearchitecturalandmethodologicaldesignofCross-ModalContrastiveCurriculumLearning\b/g, 'The architectural and methodological design of Cross-Modal Contrastive Curriculum Learning'],
  [/\bAcriticalchallengeincontrastivelearninginvolveseffectivelymanaging\b/g, 'A critical challenge in contrastive learning involves effectively managing'],
  [/\bContemporarymultimodalmodelsfrequently\b/g, 'Contemporary multimodal models frequently'],
  [/\bThecomplexityisfurthercompoundedbythemulti-headednatureofattentionintransformers\b/g, 'The complexity is further compounded by the multi-headed nature of attention in transformers'],
  [/\bwordsthatbelongtothesamesemantictopic\b/g, 'words that belong to the same semantic topic'],
  [/\bThisindicatesthattheattentionweightsthemselves\b/g, 'This indicates that the attention weights themselves'],
  [/\bCombiningCoTpromptingwithfine-tuningonstructuredrepresentationsofattentionclusters\b/g, 'Combining CoT prompting with fine-tuning on structured representations of attention clusters'],
  [/\bnecessitatingatransitiontoquantummechanicstounlocknewlevelsofcomputational\b/g, 'necessitating a transition to quantum mechanics to unlock new levels of computational'],
  [/\bQuantumlanguagemodelsspecificallyextendthesefoundationaladvantagestothelinguisticdomain\b/g, 'Quantum language models specifically extend these foundational advantages to the linguistic domain'],
  [/\bthisdirectlytranslatesintoenhancedcapabilitiesfor\b/g, 'this directly translates into enhanced capabilities for'],
  [/\btasksthatareessentiallyoptimizationorsearchproblemsovervastlinguisticspaces\b/g, 'tasks that are essentially optimization or search problems over vast linguistic spaces'],
  [/\bindingoptimaltranslations\b/g, 'finding optimal translations'],
  [/\bdisambiguatingmeaninginhighlycomplexsentences\b/g, 'disambiguating meaning in highly complex sentences'],
  [/\borgeneratinghighlycoherentandcontextuallyrelevanttextthatrequiresexploringahugecombinatorialspaceof\b/g, 'or generating highly coherent and contextually relevant text that requires exploring a huge combinatorial space of'],
  [/\bhecorequantumspeedupsforhandlingmassivedataandcomputationaredirectlyapplicabletothelargeparametercountsanddatavolumescharacteristicof\b/g, 'The core quantum speedups for handling massive data and computation are directly applicable to the large parameter counts and data volumes characteristic of'],
  [/\bmodernlargelanguagemodels\b/g, 'modern large language models'],
  [/\bicienttrainingandinf\b/g, 'efficient training and inf'],
  [/\bthatagentic\b/g, 'that agentic'],
  [/\bcanreason\b/g, 'can reason'],
  [/feedback\.arXiv/g, 'feedback. arXiv'],
  [/Tools\.arXiv/g, 'Tools. arXiv'],
  [/Survey\.arXiv/g, 'Survey. arXiv'],
  [/\bthesafetensors\b/g, 'the safetensors'],
  [/\btheCategorical\b/g, 'the Categorical'],
  [/\bbeBQP-Complete\b/g, 'be BQP-Complete'],
  [/\benablequantum\b/g, 'enable quantum'],
  [/\bf\s+romitsintendedpurposeandthusprovidesinsightsintoitsreliability\b/g, 'from its intended purpose and thus provides insights into its reliability'],
  [/\bromitsintendedpurposeandthusprovidesinsightsintoitsreliability\b/g, 'from its intended purpose and thus provides insights into its reliability'],
  [/\bgeneratedplansisessentialf\s+allowingdeveloperstocomprehendsystemsthatmightotherwisebetoointricatef\b/g, 'generated plans is essential for allowing developers to comprehend systems that might otherwise be too intricate for'],
  [/\bImprovingcodeprovenance\b/g, 'Improving code provenance'],
  [/\bandmonitoringisnecessarytotrackthelineageandmodif\s+icationsmadebyarecursivelyself\b/g, 'and monitoring is necessary to track the lineage and modifications made by a recursively self'],
  [/\bensuringtransparencyandauditability\b/g, 'ensuring transparency and auditability'],
  [/\btherebyprovidingamechanismf\b/g, 'thereby providing a mechanism for'],
  [/\bResponsibleautomatedvulnerabilitydetectiontoolsarealsocritical\b/g, 'Responsible automated vulnerability detection tools are also critical'],
  [/\bastheyhelppreventrapid\b/g, 'as they help prevent rapid'],
  [/\buncontrolledchangesthatcouldleadtosysteminstabilityormisuse\b/g, 'uncontrolled changes that could lead to system instability or misuse'],
  [/\btheprospectofautonomousdevelopmentandunpredictableevolutionposesaformidable\b/g, 'the prospect of autonomous development and unpredictable evolution poses a formidable'],
  [/\bhecorechallengeliesindesigningsystemsthatcanrecursivelyenhancetheircapabilitieswhileremainingtetheredtohumanintentandvalues\b/g, 'The core challenge lies in designing systems that can recursively enhance their capabilities while remaining tethered to human intent and values'],
  [/\bnecessitatingrobustarchitecturalandhuman\b/g, 'necessitating robust architectural and human'],
  [/\bcentriccontrolmechanisms\b/g, 'centric control mechanisms'],
  [/\bventsevereoverfittingwhentrainingdataisscarce\b/g, 'prevent severe overfitting when training data is scarce'],
  [/\brepresentsamajorleaptowardsachievingtruegeneralintelligence\b/g, 'represents a major leap towards achieving true general intelligence'],
  [/\bheimmensecomputationalcostsandresourcedemandsassociatedwithscalingAImodels\b/g, 'The immense computational costs and resource demands associated with scaling AI models'],
  [/\bleadingtohigheraggregateenergyandwaterconsumption\b/g, 'leading to higher aggregate energy and water consumption'],
  [/\blatentcapabilitiesmightnotberevealedbythetests\b/g, 'latent capabilities might not be revealed by the tests'],
  [/\bThislimitationdirectlyimpactsthereliable\b/g, 'This limitation directly impacts the reliable'],
  [/\bintheseprocessesbyflaggingpotentialrefactors\b/g, 'in these processes by flagging potential refactors'],
  [/\bidentifyingsecurityvulnerabilitiesearlyin\b/g, 'identifying security vulnerabilities early in'],
  [/\bandautomatingcompliancechecks\b/g, 'and automating compliance checks'],
  [/\bKeytechniquesincludemodelchecking\b/g, 'Key techniques include model checking'],
  [/\bwhichexhaustivelyexploresallpossiblesystemstates\b/g, 'which exhaustively explores all possible system states'],
  [/\bwhichapproximatessystembehaviorbyanalyzingsimplif\b/g, 'which approximates system behavior by analyzing simplif'],
  [/\bhesemethodsareappliedtopreventerrorsinautonomoussystems\b/g, 'These methods are applied to prevent errors in autonomous systems'],
  [/\bensurerobustnessagainstadversarialattacks\b/g, 'ensure robustness against adversarial attacks'],
  [/\bAImodelsincriticalapplicationslikemedicaldiagnosis\b/g, 'AI models in critical applications like medical diagnosis'],
  [/\bproactivevaluealignment\b/g, 'proactive value alignment'],
  [/\bandcontinuouslyadaptingtodynamicenvironmentswithminimalhumansupervision\b/g, 'and continuously adapting to dynamic environments with minimal human supervision'],
  [/\bandinterpretableverificationandvalidationframeworksareparamounttoensuresafety\b/g, 'and interpretable verification and validation frameworks are paramount to ensure safety'],
  [/\bResearchsuggeststhatforeffectiverewardshaping\b/g, 'Research suggests that for effective reward shaping'],
  [/\bcuttingthemeisthenecessaryshiftfromexternalcontroltointrinsic\b/g, 'cutting theme is the necessary shift from external control to intrinsic'],
  [/\bconsciousculturewithinAIdevelopmentorganizationsisparamount\b/g, 'conscious culture within AI development organizations is paramount'],
  [/\bNeuromorphichardwareholdspromisefordrasticallyreducingtheenergyperinference\b/g, 'Neuromorphic hardware holds promise for drastically reducing the energy per inference'],
  [/\btoaddresstheuniquechallengesofmultimodaldata\b/g, 'to address the unique challenges of multimodal data'],
  [/\bArchitecturalParadigmsandTheoreticalFrameworksforQLMs\b/g, 'Architectural Paradigms and Theoretical Frameworks for QLMs'],
  [/\bsynergisticintegrationratherthanimmediate\b/g, 'synergistic integration rather than immediate'],
  [/\bfullquantumreplacement\b/g, 'full quantum replacement'],
  [/\bgateswithadjustableparametersthatareoptimizedusingclassicalalgorithmsbasedonfeedback\b/g, 'gates with adjustable parameters that are optimized using classical algorithms based on feedback'],
  [/\badvancementsinoptimizationalgorithmsandansatzdesigntonavigatecomplexlosslandscapes\b/g, 'advancements in optimization algorithms and ansatz design to navigate complex loss landscapes'],
  [/\bsolvingcomplexoptimizationproblems\b/g, 'solving complex optimization problems'],
  [/\bQuantumlanguagemodelsspecif\b/g, 'Quantum language models specif'],
  [/\boundationaladvantagestothelinguisticdomain\b/g, 'foundational advantages to the linguistic domain'],
  [/\bormmultidimensionaldataanalysisandexploremultiplelinguisticpossibilitiessimultaneously\b/g, 'form multidimensional data analysis and explore multiple linguistic possibilities simultaneously'],
  [/\borthesecomplexlinguistictasks\b/g, 'for these complex linguistic tasks'],
  [/\bTraininglargequantumcircuitsdirectlyinquantummachinelearningcanleadtodifficultiesthat\b/g, 'Training large quantum circuits directly in quantum machine learning can lead to difficulties that'],
  [/\bdemonstrationfocusesonamplitudeencoding\b/g, 'demonstration focuses on amplitude encoding'],
  [/\bwhichisparticularlysuitableforhigh\b/g, 'which is particularly suitable for high'],
  [/\bAmplitudeencodingrequirestheclassicaldata\b/g, 'Amplitude encoding requires the classical data'],
  [/\bThisisthecoreconceptualfunc\b/g, 'This is the core conceptual func'],
]

const splitWordRepairPairs: Array<[RegExp, string]> = [
  [/\bf\s+rom\b/gi, 'from'],
  [/\bf\s+or\b/gi, 'for'],
  [/\bf\s+oundational\b/gi, 'foundational'],
  [/\bef\s+ficien/gi, 'efficien'],
  [/\bef\s+fect/gi, 'effect'],
  [/\bdif\s+ficult/gi, 'difficult'],
  [/\bspecif\s+ic/gi, 'specific'],
  [/\bmodif\s+ication/gi, 'modification'],
  [/\bverif\s+ication/gi, 'verification'],
  [/\binf\s+erence/gi, 'inference'],
  [/\binf\s+ormation/gi, 'information'],
  [/\bref\s+ining/gi, 'refining'],
  [/\bdef\s+in/gi, 'defin'],
  [/\bsaf\s+ety/gi, 'safety'],
  [/\bsof\s+tware/gi, 'software'],
  [/\bof\s+fset/gi, 'offset'],
]

function applyManualTextRepairs(text: string) {
  let repaired = text

  proseRepairPairs.forEach(([pattern, replacement]) => {
    repaired = repaired.replace(pattern, replacement)
  })

  splitWordRepairPairs.forEach(([pattern, replacement]) => {
    repaired = repaired.replace(pattern, replacement)
  })

  return repaired
    .replace(/([a-z])-\s+([a-z])/g, '$1$2')
    .replace(/:([A-Z])/g, ': $1')
    .replace(/([.!?])([A-Z])/g, '$1 $2')
    .replace(/\b(LLMs|LLM|GPUs|GPU|QLMs|QLM|AI|CPU|KV|QA|VRAM|RSI)([a-z])/g, '$1 $2')
    .replace(/\bT\s+(The|These|This)\b/g, '$1')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/([([{])\s+/g, '$1')
    .replace(/\s+([)\]}])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

function shouldSkipExtractedLine(line: string) {
  return (
    /^\[12pt,a4paper\]article/i.test(line) ||
    /\b(inputenc|graphicx|hyperref|titlesec|enumitem|parskip)\b/i.test(line) ||
    /^(documentclass|usepackage|geometry|setstretch|maketitle|tableofcontents)\b/i.test(line) ||
    /^\\(documentclass|usepackage|begin|end|maketitle|tableofcontents)/i.test(line)
  )
}

function cleanExtractedLine(line: string) {
  const cleaned = line
    .replace(/\u00c2/g, '')
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00e2\u20ac\u0153/g, '"')
    .replace(/\u00e2\u20ac\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201d/g, ' - ')
    .replace(/\u00e2\u20ac\u201c/g, ' - ')
    .replace(/\u00e2\u20ac\u00a2/g, '- ')
    .replace(/\u00e2\u2020\u2019/g, '->')
    .replace(/\u00e2\u02c6\u2019/g, '-')
    .replace(/¡/g, '<')
    .replace(/\s+/g, ' ')
    .trim()

  return applyManualTextRepairs(cleaned)
}

function isHeading(line: string) {
  if (!line || line.length > 170) {
    return false
  }

  if (/^\d+(\.\d+)*\s+\S/.test(line)) {
    const sectionNumber = Number(line.match(/^\d+/)?.[0] ?? '0')

    return sectionNumber > 0 && sectionNumber <= 20 && !isLikelyCodeLine(line)
  }

  return /^(Abstract|Executive Summary|Contents|References|Acknowledgments|Acknowledgements|Introduction|Conclusion|Discussion|Limitations|Future Directions|Methodology|Results|Applications|Ethics|Ethics and Trust|Performance Highlights|Core Innovations)$/i.test(line)
}

function headingLevel(line: string): 2 | 3 {
  return /^\d+\.\d+/.test(line) ? 3 : 2
}

function isListItem(line: string) {
  return /^(-|\*|[0-9]+\)|[0-9]+\.|\[[0-9]+\])\s*/.test(line)
}

function stripListMarker(line: string) {
  return line.replace(/^(-|\*|[0-9]+\)|[0-9]+\.|\[[0-9]+\])\s*/, '')
}

function stripCodeLineNumber(line: string) {
  return line.replace(/^\d+\s+/, '')
}

function countSpacedLetters(line: string) {
  return line.split(/\s+/).filter((token) => /^[A-Za-z]$/.test(token)).length
}

function isLikelyCodeLine(line: string) {
  const stripped = stripCodeLineNumber(line)
  const hasLineNumber = /^\d+\s+/.test(line)
  const codeKeywordPattern = /^(from|import|def|class|return|if\s|if __name__|else:|elif\s|for\s|while\s|try:|except\s|with\s|print\s*\(|#|@)/i
  const shellCommandPattern = /^(virtualenv|source\s|export\s|pip\s|mkdir\s|python\s|bash\s|gsutil\s|tensorboard\s|\* hard nofile|\* soft nofile|root hard nofile|root soft nofile)/i
  const codeTokenPattern = /(torch|numpy|np\.|qiskit|QuantumCircuit|StatePreparation|safetensors|load_file|save_file|\.draw|\.shape|\.flatten|\.norm|None|True|False|__main__|lambda|\{|\}|\[|\]|=>|==|!=|<=|>=|PYTHONPATH|requirements\.txt|\.py|\.sh|nofile)/
  const assignmentPattern = /^[A-Za-z_][A-Za-z0-9_]*\s*=/
  const functionCallPattern = /^[A-Za-z_][A-Za-z0-9_]*\s*\(/
  const spacedCodePattern = countSpacedLetters(stripped) >= 4 && /[=()[\]{}._/-]|venv|txt|py|sh|nofile|threshold|attention|tokens/i.test(stripped)

  if (/^Listing\s+\d+:/i.test(stripped)) {
    return false
  }

  if (codeKeywordPattern.test(stripped) || shellCommandPattern.test(stripped) || assignmentPattern.test(stripped) || functionCallPattern.test(stripped)) {
    return true
  }

  return spacedCodePattern || (hasLineNumber && (codeTokenPattern.test(stripped) || countSpacedLetters(stripped) >= 4))
}

function compactSpacedCodeIdentifiers(code: string) {
  return code.replace(/(?:\b[A-Za-z]\s+){2,}[A-Za-z]\b(?:\s*_\s*(?:[A-Za-z]\s*){1,}[A-Za-z]\b)*/g, (value) =>
    value.replace(/\s+/g, ''),
  )
}

function cleanCodeLine(line: string) {
  let code = stripCodeLineNumber(line)
    .replace(/’/g, "'")
    .replace(/“|”/g, '"')
    .replace(/\s*_\s*/g, '_')

  code = compactSpacedCodeIdentifiers(code)

  for (let index = 0; index < 8; index += 1) {
    code = code.replace(/\b([A-Za-z])\s+(?=[A-Za-z]\b)/g, '$1')
  }

  return code
    .replace(/\bc\s*om\s*mu\s*n\s*ity\b/gi, 'community')
    .replace(/\bd\s*et\s*ec\s*ti\s*on\b/gi, 'detection')
    .replace(/\bthr\s*es\s*ho\s*ld\b/gi, 'threshold')
    .replace(/\bpa\s*rt\s*it\s*io\s*n\b/gi, 'partition')
    .replace(/\$\s+/g, '$')
    .replace(/\s+\/\s+/g, '/')
    .replace(/\s*:\s*\/\s*\/\s*/g, '://')
    .replace(/\s+\.\s*/g, '.')
    .replace(/([A-Za-z0-9_])\s+\(/g, '$1(')
    .replace(/\(\s+/g, '(')
    .replace(/\[\s+/g, '[')
    .replace(/\s+\]/g, ']')
    .replace(/\{\s+/g, '{')
    .replace(/\s+\}/g, '}')
    .replace(/\s+,/g, ',')
    .replace(/,\s*/g, ', ')
    .replace(/\s+:\s*$/g, ':')
    .replace(/\s+\)/g, ')')
    .replace(/\s+=\s+/g, ' = ')
    .replace(/\s+=/g, ' =')
    .replace(/=\s+/g, '= ')
    .replace(/(['"])\s+([^'"]*?)\s+\1/g, '$1$2$1')
    .trimEnd()
}

function looksLikeTableOfContentsLine(line: string) {
  return /^\d+(\.\d+)*\s+.+\s\d+$/.test(line)
}

function parsePaperContent(pages: readonly string[]) {
  const blocks: PaperBlock[] = []
  const paragraph: string[] = []
  let codeLines: string[] = []
  let listItems: string[] = []
  let pendingHeading: { level: 2 | 3; text: string } | null = null
  let skippingContents = false

  function flushHeading() {
    if (!pendingHeading) {
      return
    }

    blocks.push({
      type: 'heading',
      level: pendingHeading.level,
      text: applyManualTextRepairs(pendingHeading.text),
    })
    pendingHeading = null
  }

  function flushCode() {
    if (!codeLines.length) {
      return
    }

    blocks.push({ type: 'code', text: codeLines.join('\n').trim() })
    codeLines = []
  }

  function flushParagraph() {
    if (!paragraph.length) {
      return
    }

    const text = applyManualTextRepairs(paragraph.join(' '))
    if (text) {
      blocks.push({ type: 'paragraph', text })
    }
    paragraph.length = 0
  }

  function flushList() {
    if (!listItems.length) {
      return
    }

    const items = listItems.map((item) => applyManualTextRepairs(item)).filter(Boolean)
    if (items.length) {
      blocks.push({ type: 'list', items })
    }
    listItems = []
  }

  pages.join('\n\n').split('\n').forEach((rawLine) => {
    const line = cleanExtractedLine(rawLine)

    if (shouldSkipExtractedLine(line)) {
      return
    }

    if (!line || /^\d+$/.test(line)) {
      flushHeading()

      if (codeLines.length) {
        codeLines.push('')
        return
      }

      flushParagraph()
      flushList()
      return
    }

    if (pendingHeading) {
      if (/-$/.test(pendingHeading.text) && /^[a-z][A-Za-z-]*$/.test(line)) {
        pendingHeading.text = `${pendingHeading.text.replace(/-\s*$/, '')}${line}`
        return
      }

      flushHeading()
    }

    if (/^Contents$/i.test(line)) {
      flushParagraph()
      flushList()
      flushCode()
      skippingContents = true
      return
    }

    if (skippingContents) {
      if (looksLikeTableOfContentsLine(line)) {
        return
      }
      skippingContents = false
    }

    if (isLikelyCodeLine(line)) {
      flushParagraph()
      flushList()
      codeLines.push(cleanCodeLine(line))
      return
    }

    if (codeLines.length && (/^\)|^\]|^\}|^,|^\./.test(line) || /[,([{:]$/.test(codeLines[codeLines.length - 1]))) {
      codeLines.push(cleanCodeLine(line))
      return
    }

    if (isHeading(line)) {
      flushParagraph()
      flushList()
      flushCode()
      const text = applyManualTextRepairs(line)

      if (/-$/.test(text)) {
        pendingHeading = { level: headingLevel(line), text }
        return
      }

      blocks.push({ type: 'heading', level: headingLevel(line), text })
      return
    }

    if (isListItem(line)) {
      flushParagraph()
      flushCode()
      listItems.push(applyManualTextRepairs(stripListMarker(line)))
      return
    }

    if (listItems.length) {
      flushCode()
      listItems[listItems.length - 1] = `${listItems[listItems.length - 1]} ${line}`.trim()
      return
    }

    flushCode()
    paragraph.push(line)
  })

  flushHeading()
  flushParagraph()
  flushList()
  flushCode()

  return blocks
}

function PaperBody({ pages }: { pages: readonly string[] }) {
  const blocks = parsePaperContent(pages)

  return (
    <section className="border-t border-gray-100 py-12">
      <div className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-[22px] font-normal leading-tight text-black">Paper content</h2>
        </div>
        <p className="text-[13px] leading-6 text-gray-500">
          Extracted from the source PDF and organized into continuous sections for reading on the web.
        </p>
      </div>

      <article className="mx-auto max-w-[760px] space-y-6">
        {blocks.map((block, index) => {
          if (block.type === 'heading') {
            return block.level === 2 ? (
              <h2 key={index} className="border-t border-gray-100 pt-8 text-[24px] font-normal leading-tight text-black first:border-t-0 first:pt-0">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="pt-3 text-[18px] font-normal leading-tight text-black">
                {block.text}
              </h3>
            )
          }

          if (block.type === 'list') {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-[14px] leading-7 text-gray-700">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )
          }

          if (block.type === 'code') {
            return (
              <pre key={index} className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-gray-50 p-5 font-mono text-[12px] leading-6 tracking-normal text-gray-800">
                <code>{block.text}</code>
              </pre>
            )
          }

          return (
            <p key={index} className="text-[14px] leading-7 text-gray-700">
              {block.text}
            </p>
          )
        })}
      </article>
    </section>
  )
}

export function ResearchPaperPage({
  date,
  category = 'Research Paper',
  title,
  deck,
  image,
  imageAlt,
  imageFit = 'cover',
  authors = ['TNSA Research'],
  pdfHref,
  paperContent,
  sections = [],
  children,
  related = defaultRelated,
}: ResearchPaperPageProps) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black">
      <section className="bg-[#FFFFFF] pb-10 pt-[136px] md:pt-[152px]">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 text-[12px] font-normal text-gray-500">{date}</p>
          <p className="mb-4 text-[12px] font-normal text-black">{category}</p>
          <h1 className="max-w-[880px] text-[40px] font-normal leading-tight tracking-normal text-black md:text-[58px]">
            {title}
          </h1>
          <div className="mt-5 max-w-[700px] text-[18px] font-normal leading-7 text-gray-500">
            {deck}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-100 pt-5 text-[12px] text-gray-500">
            <span className="text-black">Authors</span>
            {authors.map((author) => (
              <span key={author}>{author}</span>
            ))}
            {pdfHref ? (
              <Link href={pdfHref} className="text-black transition-colors hover:text-gray-500">
                Read full paper
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[920px] px-5 pb-28">
        <section className="border-t border-gray-100 pb-12 pt-0 first:border-t-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              quality={100}
              className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="border-t border-gray-100 py-12">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">{section.title}</h2>
              </div>
              <div className="text-[14px] leading-7 text-gray-700">
                {section.content ? renderContent(section.content) : null}
                {section.bullets?.length ? (
                  <ul className={`${section.content ? 'mt-5 ' : ''}list-disc space-y-2 pl-5`}>
                    {section.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        {paperContent?.length ? <PaperBody pages={paperContent} /> : null}

        {children ? (
          <section className="border-t border-gray-100 py-12">
            {children}
          </section>
        ) : null}

        {pdfHref ? (
          <section className="border-t border-gray-100 py-12">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-[22px] font-normal leading-tight text-black">Original PDF</h2>
                <p className="mt-2 max-w-[560px] text-[12px] leading-5 text-gray-500">
                  The source paper is appended below for reference.
                </p>
              </div>
              <Link href={pdfHref} className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-50">
                Open PDF
              </Link>
            </div>
            <object
              data={pdfHref}
              type="application/pdf"
              className="h-[720px] w-full rounded-lg border border-gray-200 bg-gray-50"
            >
              <div className="rounded-lg border border-gray-200 p-5 text-[13px] leading-6 text-gray-500">
                PDF preview is not available in this browser. Use the Open PDF button to view the original paper.
              </div>
            </object>
          </section>
        ) : null}

        <section className="border-t border-gray-100 py-12">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-[22px] font-normal leading-tight text-black">Keep reading</h2>
            <Link href="/research" className="text-[12px] text-black transition-colors hover:text-gray-500">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.href} href={item.href} className="group block border-t border-gray-100 pt-4">
                <p className="text-[12px] text-gray-500">{item.category ?? 'Research'}</p>
                <h3 className="mt-3 text-[18px] font-normal leading-tight text-black transition-colors group-hover:text-gray-500">
                  {item.title}
                </h3>
                {item.date ? <p className="mt-4 text-[12px] text-gray-500">{item.date}</p> : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg">
          <div className="relative min-h-[320px]">
            <Image
              src="/india.png"
              alt="TNSA Research"
              fill
              quality={100}
              className="object-cover"
              sizes="(min-width: 1024px) 920px, calc(100vw - 40px)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <h2 className="max-w-[560px] text-[32px] font-normal leading-tight md:text-[44px]">
                Explore TNSA research
              </h2>
              <p className="mt-3 max-w-[480px] text-[13px] leading-6 text-white/80">
                Read papers on models, attention, agents, quantum AI, and safe superintelligence.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {pdfHref ? (
                  <Link href={pdfHref} className="flex h-9 min-w-[120px] items-center justify-center rounded-full bg-white px-4 text-[12px] text-black transition-colors hover:bg-gray-100">
                    Read Paper
                  </Link>
                ) : null}
                <Link href="/research" className="flex h-9 min-w-[120px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 text-[12px] text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Research Index
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
