const reg_mail = /.+@.+\..+/g;

const c_div = document.getElementById('inscription_container');

const f = new Form(c_div);


f.load_from_JSON({ name: 'test', deb: 'ja'}, { label: true, labelize: k => '1' + k });

f.get_named('mail').add_checker(new Checker([new RuleLength(1, 200), new RuleMatchRegExp(reg_mail)]));

f.get_named(['name', 'deb']).forEach(elem => elem.add_checker(new Checker([new RuleLength(2, 10)])))
f.add_after(new Input(null, { placeholder: 'test', label: 'deb' }), 2);
f.render();
f.check();
f.set_end_function(() => alert('test'));
