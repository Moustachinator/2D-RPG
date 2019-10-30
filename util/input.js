class Input{

 static isKey(vk){
  return Input.Gamepad && !Input.Gamepad.isDisabled? Input.Keyboard.isKey(vk) :Input.Gamepad.isKey(vk);
 };

 static onGamepadConnect(e){

  if(Input.gamepad.device == null){
    Input.gamepad.device = e.gamepad;
   } else e.gamepad.allocIndex = Input.gamepads.push(e.gamepad) -1;
 };

 static onGamepadDisconnect(e){

  if(e.gamepad.index == Input.gamepad.device.index){
    Input.gamepad.device = Input.gamepads.pop();
   } else Input.gamepads = Input.gamepads.splice(e.gamepad.allocIndex, 1);
 };
};

Input.Keyboard = new Keyboard();
Input.gamepads = [];
Input.Gamepad = new Gamepad();

document.ongamepadconnect = Input.onGamepadConnect;
document.ongamepaddisconnect = Input.onGamepadDisconnect;