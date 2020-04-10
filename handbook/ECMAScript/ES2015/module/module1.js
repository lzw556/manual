let mod1_var1 = "mod1_var1";
function mod1_method1(){
    console.log(mod1_var1);
};
let mod1_var2 = "mod1_var2";
function mod1_method2(){
    console.log(mod1_var2);
}
export {mod1_var2, mod1_method2};

export default {mod1_var1, mod1_method1}