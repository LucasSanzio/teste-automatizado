const request = require('supertest');

describe('Testes da API de Pokémon', () => {
  test('Teste de status de resposta:', async () => {
    const response = await request("https://pokeapi.co/api/v2").get('/pokemon-species/aegislash');
    expect(response.status).toBe(200);
  });

  test('Teste de estrutura de dados:', async () => {
    const response = await request("https://pokeapi.co/api/v2").get('/pokemon-species/aegislash');
    expect(response.body).toHaveProperty('name'); 
    expect(response.body).toHaveProperty('flavor_text_entries');
  });

  test('Teste de presença de dados essenciais:', async () => {
    const response = await request("https://pokeapi.co/api/v2").get('/pokemon-species/aegislash');
    expect(response.body.name).toEqual('aegislash');
    expect(response.body.flavor_text_entries.length).toBeGreaterThan(0);
  });

  test('Teste de formato de texto da descrição de forma:', async () => {
    const response = await request("https://pokeapi.co/api/v2").get('/pokemon-species/aegislash');
    const flavorText = response.body.flavor_text_entries[0].flavor_text;
    expect(flavorText).toMatch(/^[a-zA-Z0-9\s\W]+$/);
  });

  test('Teste de presença de gêneros:', async () => {
    const response = await request("https://pokeapi.co/api/v2").get('/pokemon-species/aegislash');
    const genderRatio = response.body.gender_rate;
    expect(genderRatio).toBeDefined();
  });
});
