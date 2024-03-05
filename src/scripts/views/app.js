import drawerInitiator from "../utils/drawer-initiator"

class App {
    constructor({button,drawer,content}){
        this._button = button
        this._drawer = drawer
        this._content = content
        
        this._initialAppshell()
    }
    _initialAppshell(){
        drawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            button: this._button
        })
    }
}
export default App