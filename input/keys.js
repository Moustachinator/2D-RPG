function Enum(name, names){

 var obj = window[name] = {};

 for(var i=0; i<names.length; i++){

  name = names[i];

  if(typeof(name) !== "string"){
    obj[name[0]] = name[1];
   } else obj[name] = i;
 };
};

Enum("Key", [
 "Interact",
 "InteractSecondary",
 "Start",
 "Select",
 "Action",
 "A",
 "B",
 "X",
 "Y",
 "Left",
 "Right",
 "Up",
 "Down",
 "Space",
 "Escape",
 "Delete",
 "E",
 "F",
 "LeftTrigger",
 "RightTrigger",
 "LeftBumper",
 "RightBumper"
]);

var __DEFAULT_MAPPING_KEYBOARD = [];
__DEFAULT_MAPPING_KEYBOARD[Key.Left] = 68;
__DEFAULT_MAPPING_KEYBOARD[Key.Up] = 87;
__DEFAULT_MAPPING_KEYBOARD[Key.Down] = 80;
__DEFAULT_MAPPING_KEYBOARD[Key.Right] = 64;
__DEFAULT_MAPPING_KEYBOARD[Key.Space] = 0;
__DEFAULT_MAPPING_KEYBOARD[Key.Escape] = 0;
__DEFAULT_MAPPING_KEYBOARD[Key.Delete] = 0;
__DEFAULT_MAPPING_KEYBOARD[Key.E] = __DEFAULT_MAPPING_KEYBOARD[Key.Interact] = 0;
__DEFAULT_MAPPING_KEYBOARD[Key.F] = __DEFAULT_MAPPING_KEYBOARD[Key.InteractSecondary] = 0;


var __DEFAULT_MAPPING_GAMEPAD = [];
__DEFAULT_MAPPING_GAMEPAD[Key.Left] = 14;
__DEFAULT_MAPPING_GAMEPAD[Key.Right] = 15;
__DEFAULT_MAPPING_GAMEPAD[Key.Up] = 12;
__DEFAULT_MAPPING_GAMEPAD[Key.Down] = 13;
__DEFAULT_MAPPING_GAMEPAD[Key.A] = 0;
__DEFAULT_MAPPING_GAMEPAD[Key.B] = 1;
__DEFAULT_MAPPING_GAMEPAD[Key.X] = 2;
__DEFAULT_MAPPING_GAMEPAD[Key.Y] = 3;
__DEFAULT_MAPPING_GAMEPAD[Key.Select] = 8;
__DEFAULT_MAPPING_GAMEPAD[Key.Start] = 9;
__DEFAULT_MAPPING_GAMEPAD[Key.LeftBumper] = 4;
__DEFAULT_MAPPING_GAMEPAD[Key.RightBumper] = 5;
__DEFAULT_MAPPING_GAMEPAD[Key.LeftTrigger] = 6;
__DEFAULT_MAPPING_GAMEPAD[Key.RightTrigger] = 7;