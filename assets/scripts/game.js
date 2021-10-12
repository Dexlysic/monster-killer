const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('The monster has defeated you...')
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You defeated the monster!')
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('Both you and the monster pass out from the exhausting fight.  Draw!')
    }
    return;
}

function attackMonster(attackMode) {
    let maxDamage;
    if (attackMode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monsterDamage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('You cannot heal beyond your maximum health.  Keep fighting!')
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)