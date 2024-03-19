scene.setBackgroundColor(14)
let textSprite = textsprite.create("<", 0, 13)
textSprite.setMaxFontHeight(12)
let textSprite2 = textsprite.create("/", 0, 9)
textSprite2.setMaxFontHeight(12)
let textSprite3 = textsprite.create(">", 0, 13)
textSprite3.setMaxFontHeight(12)
let textSprite4 = textsprite.create("TEALS", 0, 9)
textSprite4.setMaxFontHeight(12)
let textSprite5 = textsprite.create("|", 0, 9)
textSprite5.setMaxFontHeight(12)
textSprite.setPosition(10, 10)
textSprite2.left = textSprite.right
textSprite2.y = textSprite.y
textSprite3.left = textSprite2.right
textSprite3.y = textSprite.y
textSprite4.left = textSprite3.right
textSprite4.y = textSprite.y
textSprite5.left = textSprite4.right
textSprite5.y = textSprite.y
forever(function () {
    textSprite5.setText("|")
    pause(500)
    textSprite5.setText("")
    pause(500)
})
