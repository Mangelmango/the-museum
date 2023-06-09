namespace SpriteKind {
    export const storylines = SpriteKind.create()
    export const lifeBar = SpriteKind.create()
    export const Target = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 2`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("No America", DialogLayout.Bottom)
        game.showLongText("The United States are no more", DialogLayout.Bottom)
        game.showLongText("They dont deserve to be anything. They have caused too much pain", DialogLayout.Bottom)
        game.showLongText("Now they are erased from history ", DialogLayout.Bottom)
        game.showLongText("-... . .-- .- .-. .", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 11`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("serial killers", DialogLayout.Bottom)
        game.showLongText("something we haven't seen since 200 years, mostly because we can disactivate someone knowing they might do something horrible", DialogLayout.Bottom)
        game.showLongText("This is Karla Homolka ", DialogLayout.Bottom)
        game.showLongText("we used her brain for somehting, but what", DialogLayout.Bottom)
        game.showLongText("-.-- --- ..- .-. . / -. . -..- -", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += -5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 1`)
    mySprite.setPosition(130, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 0`)
    mySprite.setPosition(190, 160)
})
// beginning placement when leaving menu screen
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    GameStart += 1
    if (GameStart == 1) {
        tiles.setCurrentTilemap(tilemap`entrance`)
        game.showLongText("An old and abandoned museum.", DialogLayout.Bottom)
        mySprite = sprites.create(assets.image`lil boy`, SpriteKind.Player)
        mySprite.setPosition(130, 170)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 5`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("The first cybord ever made. Name: Ash Bishop. 2093-2150 ", DialogLayout.Bottom)
        game.showLongText("they made them by connecting the wires to important parts of the brain", DialogLayout.Bottom)
        game.showLongText("they mysteriously died but scientist kept their body", DialogLayout.Bottom)
        game.showLongText("til this day, no one knows what happened to them", DialogLayout.Bottom)
        game.showLongText("- ..- .-. -. / .- .-. --- ..- -. -.. /", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += -5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 0`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("They turned me down, now I live my nightmare", DialogLayout.Bottom)
        game.showLongText("Gotta be seen by someone out there", DialogLayout.Bottom)
        game.showLongText("Now I sit here in reflection chamber", DialogLayout.Bottom)
        game.showLongText("Fixing myself so that all can savor", DialogLayout.Bottom)
        game.showLongText("-.. .. .. .. .. .. .. .. .. . . . . . . . . . . . . . . . . . . . .", DialogLayout.Bottom)
        mySprite.y += -5
        mySprite.x += -5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 10`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("the human body", DialogLayout.Bottom)
        game.showLongText("what a beautiful structure", DialogLayout.Bottom)
        game.showLongText("haven't see one since forever", DialogLayout.Bottom)
        game.showLongText("are those... real bones?", DialogLayout.Bottom)
        game.showLongText("-.-- --- ..- .-.. .-.. / -... . / --- -. . / --- ..-. / ..- ...", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
// character moment 
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 1`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("Welcome, to the museum. In this year of 2348, all natural humans have disapeared.", DialogLayout.Bottom)
        game.showLongText("Most of the population is between Cyborg or fully robot and forgot about the original history", DialogLayout.Bottom)
        game.showLongText("shall we start?", DialogLayout.Bottom)
        game.showLongText("Get close to the statues", DialogLayout.Bottom)
        game.showLongText("And you'll get a story", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 3`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("Tik Tok", DialogLayout.Bottom)
        game.showLongText("Vine", DialogLayout.Bottom)
        game.showLongText("Musicly", DialogLayout.Bottom)
        game.showLongText("What did we do wrong", DialogLayout.Bottom)
        game.showLongText("... --- -- . --- -. . ... / .. -. / .... . .-. . /", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 4`)
    mySprite.setPosition(159, 4)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 9`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("to be or not to be", DialogLayout.Bottom)
        game.showLongText("poetry is dead", DialogLayout.Bottom)
        game.showLongText("we're all doomed", DialogLayout.Bottom)
        game.showLongText("cuz are we human or robots", DialogLayout.Bottom)
        game.showLongText("-.. --- -. - / -.-. .-. -.-- / ..-. --- .-. / .... . .-.. .--. / .-.. .- - . .-.", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 6`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("this is the first cyborg on mars. Name:Kronos 2100-? ", DialogLayout.Bottom)
        game.showLongText("They gave us so much information about the planet", DialogLayout.Bottom)
        game.showLongText("but their death was so mysterious, we coudn't even find the body.  ", DialogLayout.Bottom)
        game.showLongText("So we tried to replicate it as close as possible", DialogLayout.Bottom)
        game.showLongText("--. --- / -... .- -.-. -.-", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 4`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("as you see here, i might look a little bit familiar", DialogLayout.Bottom)
        game.showLongText("i was a very popular game that kept some people entertained in the year 2020", DialogLayout.Bottom)
        game.showLongText("that pandemic really hit hard but i was there to help them", DialogLayout.Bottom)
        game.showLongText("so am i the imposter or a crewmate?", DialogLayout.Bottom)
        game.showLongText("--. --- / .- .-- .- -.--", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
// reason you cant go back
scene.onOverlapTile(SpriteKind.Player, assets.tile`backdoor`, function (sprite, location) {
    game.showLongText("i can't get out of here", DialogLayout.Full)
    mySprite.y += -5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 12`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("Victims, something we have yet to get rid of", DialogLayout.Bottom)
        game.showLongText("just because we have more protection, doesn't mean they don't exist", DialogLayout.Bottom)
        game.showLongText("This is Junko Furuta", DialogLayout.Bottom)
        game.showLongText("99 days of hell, i do feel bad for her. We'll fight til there is no more crime. for you and for others", DialogLayout.Bottom)
        game.showLongText(".... . .-.. .--. / -- . . . / .... . .-.. .--. / -- . . . . . . . . . . . . . .", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`statue 8`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        game.showLongText("Fire", DialogLayout.Bottom)
        game.showLongText("something that has been used since forever", DialogLayout.Bottom)
        game.showLongText("but it is now banned everywhere.", DialogLayout.Bottom)
        game.showLongText("why? Well we have December 1993, March 2023,April 2189, January 2203 ", DialogLayout.Bottom)
        game.showLongText("--. --- / -... .- -.-. -.- / --- ..- - ... .. -.. .", DialogLayout.Bottom)
        mySprite.y += 5
        mySprite.x += 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`button shit`, function (sprite, location) {
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d f 
        f d f d d f f f f f d f f d f 
        f d f d d d d d d d d d f d f 
        f d f d d d d d d d d d f d f 
        f d f d d d d d d d d d f d f 
        f d d d d d d d d d d d d d f 
        f d f d d d d d d d d d d d f 
        f d f d d d d d d d d d f d f 
        f d f d d d d d d d d d f d f 
        f d f d d d d d d d d d f d f 
        f d d d d d d d d d d d f d f 
        f d f f f f f d f d d f f d f 
        f d d d d d d d d d d d d d f 
        f f f f f f f f f f f f f f f 
        `)
    game.showLongText("you people", DialogLayout.Bottom)
    game.showLongText("so curious", DialogLayout.Bottom)
    game.showLongText("well you know what they say", DialogLayout.Bottom)
    game.showLongText("curiosity killed the cat", DialogLayout.Bottom)
    mySprite.setStayInScreen(false)
    tiles.setCurrentTilemap(tilemap`battle moment`)
    mySprite.setPosition(74, 55)
    game.setDialogCursor(assets.image`boss`)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    game.setDialogTextColor(1)
    game.showLongText("you think you can", DialogLayout.Bottom)
    game.showLongText("JUST COME HERE AND DESTROY EVERYTHING", DialogLayout.Bottom)
    game.showLongText("Wanna start", DialogLayout.Bottom)
    game.setDialogCursor(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    game.showLongText("part two of the game in the website", DialogLayout.Center)
    game.showLongText("too much code, sorry ", DialogLayout.Center)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccddddddddddddddddddcccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccddddddddddddddddddccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccddddddddddddddddddcccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccddddddddddddddddddccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888ddddddd8888888888888dddd888888888888888dddd88888888888888888ddffccccccccddddd88888888888ddccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888ddddddd8888888888888dddd888888888888888dddd88888888888888888ddffccccccddddddd88888888888dddddcccccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888888dd88888888888888888dd888888888888888888d88888888888888888ddffccccccddddddd88888888888dddddcccccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddd888888dd88888ddddddd88888dd88888ddddddd888888ddddddd88888ddddddddffccccccdddd888888ddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddd888888dd88888ddddddd88888dd88888ddddddd888888ddddddd88888ddddddddffccccccdddd888888ddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddd888888dd88888ddddddd88888dd88888ddddddd888888ddfffdd88888ddffffffffccccccdddd888888ddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddd888888dd88888ddddddd88888dd88888ddddddd888888ddfffdd88888ddffffffffccccccddddddddddddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddd888888dd88888ddddddd88888dd88888ddddddd888888ddfffdd88888ddffccccccccccccddddddddddddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888888dd88888ddddddd88888dd888888888888888888ddffcdd88888ddffccccccccccccccccccddddddddd888888ddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888ddddd88888ddddddd88888dd888888888888888dddddffcdd88888ddffccccccccccccccccccdd8888888888dddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888888888888ddddd88888888888888888dd888888888888888dddddffcdd88888ddffccccccccccccccccccdd8888888888dddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddddddddfdd88888888888888888dd88888ddddddd888dddddffcdd88888ddffccccccccccccdddddddd8888888888dddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888dddddddddddfdd88888888888888888dd88888ddddddd888dddddffcdd88888ddffccccccccccccdddddddd888ddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffffffffffdd88888ddddddd88888dd88888ddddddd888dddddffcdd88888ddffccccccccccccddddd888888ddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffffffffffdd88888ddddddd88888dd88888ddddddd888dddddffcdd88888ddffccccccccccccddddd888888ddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffccccccccdd88888ddddddd88888dd88888ddddddd88888dddffcdd88888ddffccccccccccccddddd888888ddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffccccccccdd88888ddddddd88888dd88888ddddddd88888dddffcdd88888ddffccccccccccccdd888888888ddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffccccccccdd88888ddddddd88888dd88888ddddddd88888dddffcdd88888ddffccccccccccccdd888888888888888888dddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffccccccccdd88888ddddddd88888dd88888ddddddd88888dddffcdd88888ddffccccccccccccdd888888888888888888dddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdd88888ddffccccccccdd88888ddddddd88888dd88888ddddddd88888dddffcdd88888ddffccccccccccccdd888888888888888888dddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdddddddddffccccccccdddddddddddddddddddddddddddddddddddddddddffcdddddddddffccccccccccccdddddddddddddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccdddddddddffccccccccdddddddddddddddddddddddddddddddddddddddddffcdddddddddffccccccccccccdddddddddddddddddddddddffcccccccccccccccccccccccccccc
        cccccccccccccccccccccccfffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffcccfffffffffccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccc
        cccccccccccccccccccccccfffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffcccfffffffffccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccddddddcccddddddccccccccdddccccdddcccdddddccccccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccddddddcccddddddccccccccdddccccdddcccdddddccccccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccddddddcccddddddccccccccdddccccdddcccdddddccccccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccddddddccccccdddccccccdddccccccccccccddddddcccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccddddddccccccdddccccccdddcccccdddccccddddddcccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccddddddccccccdddccccccdddcccccdddccccddddddcccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccdddccccccccccccdddccccccccdddccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddccccdddccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddcccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccdddddddddccccccddddddddcccccdddcccccccccdddccccccdddcccccdddccccdddccccccccdddcccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccddddddcccccccccdddddddddccccccdddcccccccccdddccccdddddddddddccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccddddddcccccccccdddddddddccccccdddcccccccccdddccccdddddddddddccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccddddddcccccccccdddddddddccccccdddcccccccccdddcccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccccccdddcccdddcccccccccdddccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccccccdddcccdddcccccccccdddccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccccccdddcccdddcccccccccdddccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddddddddddddddcccccccccdddcccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddddddddddddddcccccccccdddcccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddddddddddddddcccccccccdddcccccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddccccccccccccccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddccccccccccccccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddcccdddccccccccccccccccccdddcccdddccccccccccdddcccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddccccccddddddddddddcccdddcccccccccdddccccccccccddddddcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddccccccddddddddddddcccdddcccccccccdddccccccccccddddddcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccdddccccccddddddddddddcccdddcccccccccdddccccccccccddddddcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 5`)
    mySprite.setPosition(180, 150)
})
// going through rooms  beginning
scene.onOverlapTile(SpriteKind.Player, assets.tile`entrance`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    mySprite.setPosition(130, 200)
})
// starting everything
let GameStart = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffff
    fffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffff
    ffffffffffffffffffffffccccddddddddddddddddccddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222cc2c2cccccffffffffffffffffffffffff
    fffffffffffffffffffffccccddddddddddddddddddedddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cc2ccc2cccccccfffffffffffffffffffffff
    fffffffffffffffffffffcccddddddddddddddddddddedddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222c2222cc2c2ccccccfffffffffffffffffffffff
    fffffffffffffffffffffcccddddddddddddddddddddedddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffff
    fffffffffffffffffffffc222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ccffffffffffffffffffffff
    fffffffffffffffffffffc22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c2c2c22cccfffffffffffffffffffff
    fffffffffffffffffffffc222211111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222ccccffffffffffffffffffff
    fffffffffffffffffffffc22211111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222222222c2c2c22ccccffffffffffffffffffff
    fffffffffffffffffffffc222111111111111111111111111111111111111111111111111111111111111111122222222222222222222222222222222222222222222222ccccffffffffffffffffffff
    fffffffffffffffffffffc22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c2c2c22ccccffffffffffffffffffff
    fffffffffffffffffffffc222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888444444484444444888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc8888888888444444444448888888888888888884555554c4555554c888888888888888888888888888888888888888888888888888cccccc88ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888845555555554c888888888888888884555554c4555554c888888888888888888888888888888888888888888888888888cccccc88ccccffffffffffffffffffff
    fffffffffffffffffffffc8888888888455555555544444444444444448884555554c4555554c8888888888888888888888888888888888888888888888888888888cc88ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888845555555554455445544555554c884555554c4555554c8444484444444444484444444444484444444444448888888888888cc88ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888844445554444455445544554444c88455555444555554c84554c45544555554c45555544554c455445544554c888888888888cc88ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888845554ccc4554455445544c8888455555555555554c84554c45545544444c45544444554c455445544554c888888888888cc88ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888845554c884554455445554c8888455444555444554c84554c45545544444c45544cc4554c455445544554c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888845554c884555555445544c88884554c45554c4554c84554c45544555554445554c84554c455445555554c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888845554c884554455445544448884554c44444c4554c84554c45544555555445544c84554c455445455454c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888845554c88455445544555554c884554ccccccc4554c845544455444444554455444445544455445444454c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888844444c88444444444444444c884554c8888884554c8445555544455555444555554445555544454cc454c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88888888888888ccccc888ccccccccccccccc884444c8888884444c8c4444444c4444444c4444444c4444444c444c8444c8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc8888888888888888888888888888888888888888cccc8888888cccc888cccccc88cccccc88cccccc88cccccc88ccc88ccc8888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88888888888888888888888888888888888888888888444444444c888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888844555555544c88888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc84444444c4444444c4444444444444488444444488445ccccccc544444444444444444c88844444444444444444444444c4444444c44444444ccccffffffffffffffffffff
    fffffffffffffffffffffc8455555444555554445555544555554c44555554c845c885558885445555554455555448844555555445555554455555444555554445555554ccccffffffffffffffffffff
    fffffffffffffffffffffc8455ccc54455cc55445544445544444c45544444c845c85888588544445544455ccc554c84554444444445544455ccc554455cc55444455444ccccffffffffffffffffffff
    fffffffffffffffffffffc8455c8854455c855445544c45555544c45555544cc45c8588858854c84554c455c88554c8455555544cc4554c455c88554455c8554c84554c8ccccffffffffffffffffffff
    fffffffffffffffffffffc8455555444555554445554c445555544445555544c45c8555558854c84554c455c88554c84455555544c4554c45555555445555544c84554c8ccccffffffffffffffffffff
    fffffffffffffffffffffc84554444c4554454445544cc44555554c44555554c45c8588858854c84554c455c88554c8c445555554c4554c45544455445544544c84554c8ccccffffffffffffffffffff
    fffffffffffffffffffffc84554ccc845544554455444444444554c44444554c45c8588858854c84554c455c88554c88444444554c4554c4554c455445544554c84554c8ccccffffffffffffffffffff
    fffffffffffffffffffffc84554c88845544554455555445555544c45555544c45c8588858854c84554c445555544c88455555544c4554c4554c455445544554c84554c8ccccffffffffffffffffffff
    fffffffffffffffffffffc84444c8884444444444444444444444c84444444c84458888888544c84444cc4444444cc8844444444c84444c4444c444444444444c84444c8ccccffffffffffffffffffff
    fffffffffffffffffffffc88cccc88888cccccccccccccccccccc888cccccc88844555555544cc88cccc88cccccc888888cccccc888cccc8ccccccccccccccccc88cccc8ccccffffffffffffffffffff
    fffffffffffffffffffffc88888888888888888888888888888888888888888888444444444cc88888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888ccccccccc888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    fffffffffffffffffffffc88cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccffffffffffffffffffff
    ffffffffffffffffffffffc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cccccffffffffffffffffffff
    fffffffffffffffffffffffc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccccffffffffffffffffffff
    ffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffff
    ffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffff
    fffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffff
    ffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogTextColor(12)
music.setVolume(111)
// walking direction animation
forever(function () {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.LoopingInBackground)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
            . . f f f f f f f f f f f f f . 
            . f a a 4 5 5 5 5 5 5 5 5 5 5 f 
            f a a a 4 5 6 6 6 6 6 6 6 4 5 f 
            f a a a 4 5 7 7 7 7 7 7 7 4 5 f 
            f a a a 4 5 7 c 7 7 7 c 7 4 5 f 
            f 9 9 9 4 5 3 c 7 7 7 c 3 4 5 f 
            . f a a 4 5 7 7 7 7 7 7 7 4 5 f 
            . f 9 a 4 5 5 5 5 5 5 5 5 5 5 f 
            . . f f f f f f 4 4 4 f f f f . 
            . . . f a 8 a a 1 2 1 a a f . . 
            . . f a f 8 a a a 2 a a a a f . 
            . . f 1 f 8 a a a a a a 8 1 f . 
            . . f 7 f f f f f f f f f 7 f . 
            . . . f f f . . . . . f f f . . 
            . . . . f . . . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 5 5 5 5 5 5 5 5 5 5 4 a a f . 
            f 5 4 6 6 6 6 6 6 6 5 4 a a a f 
            f 5 4 7 7 7 7 7 7 7 5 4 a a a f 
            f 5 4 7 c 7 7 7 c 7 5 4 a a a f 
            f 5 4 3 c 7 7 7 c 3 5 4 9 9 9 f 
            f 5 4 7 7 7 7 7 7 7 5 4 a a f . 
            f 5 5 5 5 5 5 5 5 5 5 4 a 9 f . 
            . f f f f 4 4 4 f f f f f f . . 
            . . f a a 1 2 1 a a 8 a f . . . 
            . f a a a a 2 a a a 8 f a f . . 
            . f 1 8 a a a a a a 8 f 1 f . . 
            . f 7 f f f f f f f f f 7 f . . 
            . . f f f . . . . . f f f . . . 
            . . . . f . . . . . . f . . . . 
            `)
    }
    if (controller.up.isPressed()) {
        mySprite.setImage(assets.image`back`)
    }
    if (controller.down.isPressed()) {
        mySprite.setImage(assets.image`front boiii`)
    }
})
