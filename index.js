const div = document.getElementById('test');
const reg_mail = /.+@.+\..+/g;

const form = new Form(div, () => alert('Success'));


const input = new Input(5187,{
    name:'deb'
});
const input2 = new Input('dbze', {
    placeholder: 'test',
    className: 'teb',
    type: 'password',
    name:'YAY'
});


const check = new Checker([], { error_separator: 'et' });

const rule1 = new RuleLength(10, 12, {
    too_short_msg: 'trop court'
});
const rule2 = new RuleShouldContain(['@']);
const rule3 = new RuleShouldNotContain(['*']);
const rule4 = new RuleMatchFields([input, input2]);
const rule5 = new RuleMatchRegExp(reg_mail)

// check.add_rule(rule2);
// check.add_rule(rule3);
check.add_rule(rule4);
// check.add_rule(rule5);
check.add_rule(rule1);


input.add_checker(check);

form.add_input(input);
form.add_input(input2);



form.render();

form.set_end_function(()=>alert('debbb'));