const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "André",
      teste2: "andrevieir@gec.inatel.br",
                senha: "123456",
            }),
        }));

        expect(await user.create({
            id: 1,
            nome: "André",
  teste2: "andrevieir@gec.inatel.br",
            senha: "123456"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
      teste2: expect.any(String),
                senha: expect.any(String),
            }),
        );
    });
});

describe('editUser', () => {
    it('Valid edit', async () => {
        UserModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    senha: '123456789',
          teste2: 'andrevieira2@gec.inatel.br',
                    nome: 'Andre 1',
                }),
            }),
        }));

        expect(await user.update({
  teste2: 'andrevieira2@gec.inatel.br',
            nome: 'Andre 1',
        })).toEqual(
            expect.objectContaining({
      teste2: expect.any(String),
                nome: expect.any(String),
                senha: expect.any(String),
                id: expect.any(Number),
            }),
        );
    });
});

describe('listUsers', () => {
    it('Valid list', async () => {
        UserModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
      teste2: 'teste2.com',
                nome: 'André2',
                senha: 'teste1234',
            }),
        }));

        expect(await user.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
      teste2: 'teste2.com',
                nome: 'André2',
                senha: 'teste1234',
            }),
        );

    });
});

describe('getByEmail', () => {
    it('Valid list', async () => {
        UserModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
      teste2: 'teste2.com',
                nome: 'André2',
                senha: 'teste1234',
            }),
        }));

        expect(await user.getByEmail({
  teste2: 'teste2.com'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
      teste2: 'teste2.com',
                nome: 'André2',
                senha: 'teste1234',
            }),
        );

    });
});

describe('deleteUser', () => {
    it('Valid delete', async () => {
        UserModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await user.delete({
  teste2.com',
        })).toEqual(1);
    });
});