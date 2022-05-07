const MissionCommander = require('../app/missionCommander');
describe("Esto es una suite de pruebas", () => {
  test("Caso de prueba 1", () => {
    const myMissionCommander = new MissionCommander("funciona");
    expect(myMissionCommander.name).toBe("funciona");
  });
});
