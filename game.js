const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Choose a character :)',
    options: ([
      {
        text: 'Genghis Khan',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Napolean Bonaparte',
        setState: { nb: false},
        nextText: 2
      },
      {
        text: 'Adolf Hitler',
        setState: {hitler: false},
        nextText: 2
      }
    ])
  },
  {
    id: 2,
    text: 'What will your first move be? ',
    options: ([
      {
        text: 'Conquer New Territories',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Establish a Trade Network',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 12
      },
      {
        text: 'Cultural Development',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 17
      },
      {
        text: 'Maintain Order',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 22
      },
    ])
  },
  {
    id: 3,
    text: 'Choose your next move ',
    options: ([
      {
        text: 'Attack a Neighboring Region',
        nextText: 4
      },
      {
        text: 'Negotiate Alliances',
        nextText: 8
      }
    ])
  },
  {
    id: 4,
    text: 'Choose what to do now',
    options: ([
      {
        text: 'Launch a Surprise Attack',
        nextText: 5
      },
      {
        text: 'Siege and Conquer',
        nextText: 7
      },
      {
        text: 'Infiltrate and Sabotage',
        nextText: 6
      }
    ])
  },
  {
    id: 5,
    text: 'Victory - The surprise attack catches the enemy off guard, leading to a swift conquest and the acquisition of valuable resources.',
    options: ([
      {
        text: 'Restart',
        nextText: -1
      }
    ])
  },
  {
    id: 6,
    text: 'Loss - The enemy discovers the spies, and the infiltration fails. This leads to heightened defenses and a difficult confrontation.',
    options: ([
      {
        text: 'Restart',
        nextText: -1
      }
    ])
  },
  {
    id: 7,
    text: 'Victory - After a challenging siege, the enemy surrenders, and the region is added to the growing empire.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Choose what to do now',
    options: [
      {
        text: 'Arrange Marriages',
        nextText: 9
      },
      {
        text: 'Trade and Diplomacy: ',
        nextText: 10
      },
      {
        text: 'Tribute and Subjugation',
        nextText: 11
      },

          ]
  },
  {
    id: 9,
    text: 'Victory - The strategic marriages create strong alliances and improve diplomatic relations with neighboring regions.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Victory - Trade agreements are successfully negotiated, bringing prosperity and allies to emperor',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Loss - The demand for tribute creates resentment, leading to rebellion and a weakened position.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'Choose what to do now',
    options: [
      {
        text: 'Silk Road Expansion',
        nextText: 13
      },
      {
        text: 'Maritime Trade ',
        nextText: 14
      },
      {
        text: 'Barter System' ,
        nextText: 15
      },
      {
        text: 'Establish Marketplaces' ,
        nextText: 16
      },

          ]
  },
  {
    id: 13,
    text: 'Victory - The trade routes along the Silk Road flourish, bringing wealth and cultural exchange to the empire.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'Loss - Attempting to expand maritime trade results in a naval defeat, hampering economic growth.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text: 'Victory - The barter system fosters trade relationships and bolsters the economy, strengthening the empire.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    text: 'Victory - The marketplaces become bustling hubs of commerce, attracting merchants from far and wide.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 17,
    text: 'Choose what to do now',
    options: [
      {
        text: 'Patronize the Arts',
        nextText: 18
      },
      {
        text: 'Architectural Marvels ',
        nextText: 19
      },
      {
        text: 'Educational Reforms' ,
        nextText: 20
      },
      {
        text: 'Cultural Exchanges' ,
        nextText: 21
      },

          ]
  },
  {
    id: 18,
    text: "Victory - The empire's cultural prestige rises, leading to loyalty from the populace and admiration from other regions.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: "Victory - The construction of grand structures leaves a lasting legacy, cementing Genghis Khan's influence.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 20,
    text: "Victory - Education flourishes, leading to a skilled population and advancements in science and knowledge.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 21,
    text: "Loss - The cultural exchanges result in an influx of foreign ideas that challenge the empire's traditions and unity.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 22,
    text: 'Choose what to do now',
    options: [
      {
        text: 'Law Enforcement',
        nextText: 23
      },
      {
        text: 'Administrative Reforms ',
        nextText: 24
      },
      {
        text: 'Infrastructure Development' ,
        nextText: 25
      },
      {
        text: 'Tribal Integration' ,
        nextText: 26
      },

          ]
  },
  {
    id: 23,
    text: "Victory - The establishment of a strong law enforcement system ensures stability and control within the empire.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 24,
    text: "Victory - Administrative efficiency improves, leading to smoother governance and resource management.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 25,
    text: "Victory - The improved infrastructure facilitates communication and trade, benefiting the empire's expansion.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 26,
    text: "Loss - The integration efforts lead to internal conflicts, weakening the empire's unity and authority.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
]

startGame()