//Alphabet Hiragana en tableau multidimensionel

var hiraganaVerso = [ // 0 = hiragana, 1 = alphabet latin, 2 = touche du clavier, 3 = ordre de la touche du clavier, 4 = indice [Nb = indice au hasard][0 = indice FR sans la lettre, 1 = indice FR solution, 2 = indice JA sans la lettre, 3 = indice JA solution, 4 = tranduction FR]

    ["あ","a",51, 2,[
            ["- ri ga to","a ri ga to","-りがと", "ありがと", "Merci"],
            ["-rigato","arigato","-りがと", "ありがと"]
        ]
    ], 
    ["い","i",69, 14,[
            ["ha-","hai","はい", "は-", "Oui"]
        ]
    ],  
    ["お","o",54, 5,[
            ["-rigato","arigato","-りがと", "ありがと"]
        ]
    ],  
    ["う","u",52, 3,[
            ["-rigato","arigato","-りがと", "ありがと"]
        ]
    ],  
    ["え","e",53, 4,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["か","ka",84, 16,[
            ["-ngearu","kangaeru","-んがえる", "かんがえる", "Penser"]
        ]
    ],  
    ["き","ki",71, 27,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["こ","ko",66, 40,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["く","ku",72, 28,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["け","ke",192, 33,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["さ","sa",88, 37,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["し","shi",68, 25,[
            ["-ngō","shingō","-んごう", "しんごう", "Le feu de circulation"]
        ]
    ],  
    ["そ","so",67, 38,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["す","su",82,15,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["せ","se",80, 21,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["た","ta",65, 12,[
            ["-beru","taberu","-べる", "たべる", "Manger"]
        ]
    ],  
    ["ち","chi",81, 23,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["と","to",83, 24,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["つ","tsu",87, 36,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["て","te",90, 13,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["な","na",85, 18,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["に","ni",73, 19,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["の","no",75, 30,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ぬ","nu",49, 0,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ね","ne",190, 43,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["は","ha",70, 26,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ひ","hi",86, 39,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ほ","ho",219, 10,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ふ","fu",50,1,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["へ","he",187, 11,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["ま","ma",74, 29,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["み","mi",78, 41,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["も","mo",188, 42,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["む","mu",220, 34,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["め","me",223,45,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["や","ya",55, 6,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],   
    ["よ","yo",57, 8,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ゆ","yu",56, 7,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["ら","ra",79, 20,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["り","ri",76, 31,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ろ","ro",226, 35,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["る","ru",191, 44,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["れ","re",77,32,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ], 
    ["わ","wa",48, 9,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["を","wo",221, 22,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ],  
    ["ん","n",89, 17,[
            ["-rigato","arigato","-りがと", "-りがと"]
        ]
    ]
];  