const { conn } = require('../db.js');
const { Driver } = require('../db.js');

describe('Driver model', () => {
	beforeAll(async () => {
		await conn.sync({ force: true });
	});

	describe('isUniqueNameAndLastName', () => {
		it('should throw an error if a driver with the same name and last name already exists', async () => {
			const driver = await Driver.create({
				name: 'Fernando',
				lastName: 'Alonso',
				dateOfBirth: '1985-01-07',
				image: 'https://example.com/lewis-hamilton.jpg',
				description: 'A very fast driver the number one driver juajaji',
				teams: ['Renault'],
				nationality: 'spanish',
			});
			expect(driver).toThrow(
				'Ya existe un conductor con el mismo nombre y apellido'
			);
		});

		xit('should not throw an error if no driver with the same name and last name exists', async () => {
			await expect(
				Driver.build({
					name: 'Max',
					lastName: 'Verstappen',
				}).isUniqueNameAndLastName('Max')
			).resolves.not.toThrow();
		});
	});
});
