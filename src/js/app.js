import Team from './team';
import Bowman from './bowman';

const team = new Team();
team.add(new Bowman('qwe'));
team.add(new Bowman('asd'));
team.add(new Bowman('zxc'));

for (const character of team) {
  console.log(character);
}
