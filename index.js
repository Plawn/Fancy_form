const reg_mail = /.+@.+\..+/g;
// const caractere_speciaux = ['¢', 'ß', '¥', '£', '™', '©', '®', 'ª', '×', '÷', '±',
//     '²', '³', '¼', '½', '¾', 'µ', '¿', '¶', '·', '¸', 'º', '°', '¯', '§', '…',
//     '¤', '¦', '≠', '¬', 'ˆ', '¨', '‰'
// ];

// const c_div = document.getElementById('inscription_container');

// const form = new Form(c_div, { btn_txt: 'inscription', classname: 'bouton_ins' });

// const check_not_null = new Checker([
//     new RuleLength(1, 200, { too_short_msg: 'Trop court' }),
//     new RuleShouldNotContain(caractere_speciaux)
// ]);

// const name = new Input('input_nom', { placeholder: 'Nom', name: 'nom' ,value:'deb'});
// const prenom = new Input('input_prenom', { placeholder: 'Prenom', name: 'prenom' });
// const login = new Input('input_login', { placeholder: 'Login', name: 'login' });
// const num_tel = new Input('input_num_tel', { placeholder: 'Numéro de téléphone', name: 'num_tel' });
// const adresse = new Input('input_adresse', { placeholder: 'Adresse', name: 'adresse' });

// [name, prenom, login, num_tel, adresse]
// .forEach(input => input.add_checker(check_not_null))

// const mail = new Input('mail_input', { placeholder: 'Adresse mail', name: 'mail' });
// const mail_checker = new Checker();
// mail_checker.add_rule(new RuleMatchRegExp(reg_mail, { error_msg: 'Adresse mail  non valide' }));
// mail.add_checker(mail_checker);

// const pass1 = new Input('input_pass', { placeholder: 'Mot de passe', type: 'password', name: 'password' });
// const pass2 = new Input('input_pass2', { placeholder: 'Mot de passe', type: 'password', name: 'pass2' });

// const pass_checker = new Checker([
//     new RuleMatchFields([pass1, pass2], { error_msg: 'Les mots de passe ne sont pas identiques' }),
//     new RuleLength(8, 200, { too_short_msg: 'Trop court' })
// ], { error_separator: 'et' });


// pass1.add_checker(pass_checker);

// [name, prenom, login, num_tel, adresse, pass1, pass2, mail]
// .forEach(input => form.add_input(input));

// const inscription = () => {
//     ask('ajout_utilisateur', form.toJSON())
//         .then(data => {
//             const res = JSON.parse(data);
//             if (res[0]['success'] == true) {
//                 alert("inscription réussie | redirection vers la page d'accueil");
//                 window.location = '?page=home';
//             }
//             else alert("erreur lors de l'inscription | login déjà réservé ");
//         });
// };

// form.set_end_function(inscription);
// form.render();
const c_div = document.getElementById('inscription_container');

const f = new Form(c_div);


f.load_from_JSON({name:'test', deb:'ja', mail:'paul.leveau@isep.fr'}, {label:true, label_func:(k)=>'1'+k});


// f.add_checker_to_subtype(, 'base');



f.get_named('mail').add_checker(new Checker([new RuleLength(1,200), new RuleMatchRegExp(reg_mail)]));

f.get_named(['name', 'deb']).forEach(elem => elem.add_checker(new Checker([new RuleLength(2,10)])))
f.add_after(new Input(null, {placeholder:'test',label:'deb'}), 2);
f.render();
f.check();
f.set_end_function(()=> alert('test'));