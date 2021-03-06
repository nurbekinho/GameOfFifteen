import org.w3c.dom.CENTER
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.CanvasTextAlign
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.window

class Game(private val context: CanvasRenderingContext2D) {
    companion object {
        const val INTRO = "intro"
        const val PLAYING = "playing"
        const val PAUSED = "paused"
        const val FINISHED = "finished"
    }

    var state = ""

    init {
        window.addEventListener("keydown", {onKeyDown(it)})
        window.addEventListener("keyup", {onKeyUp(it)})

        intro()
    }

    private fun intro() {
        state = INTRO

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.textAlign = CanvasTextAlign.CENTER
        context.fillText(
                "Press [Space Bar] To Start The Game!",
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2
        )
    }

    private fun update() {

    }

    private fun draw() {

    }

    private fun onKeyDown(event: Event) {
        val keyboardEvent = event as KeyboardEvent
        //println(keyboardEvent.keyCode)
    }

    private fun onKeyUp(event: Event) {
        val keyboardEvent = event as KeyboardEvent
        when (keyboardEvent.keyCode) {
            //32 -> if (state == INTRO) start()
        }
    }
}
