const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Andre",
        email: "andrevieira@gec.inatel.br",
        senha: "123456"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "andrevieira@gec.inatel.br",
        senha: "123456"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
