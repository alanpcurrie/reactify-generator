function generateComponentContent(name, isComponent) {
  if (isComponent) {
    return `import React from 'react';

type ${name}Props = {
  // Define your prop types here
};

function ${name}(props: ${name}Props) {
  return (
    <div>
      {/* Your component implementation */}
    </div>
  );
}

export default ${name};
`;
  } else {
    return `import { useState } from 'react';

export function ${name}() {
  // Function logic here
}
`;
  }
}

function generateTestContent(name, assertText, fileName, isComponent) {
  return `import { describe, it, expect } from 'vitest';
import ${isComponent ? name : `{ ${name} }`} from './${fileName}';

describe('${name}', () => {
  it('should ${assertText}', () => {
    /*
      ARRANGE:
      Initialize your test data and set the state of the system.
    */
   
    /*
      ACT:
      Invoke the function or simulate the action being tested.
    */
   
    /*
      ASSERT:
      Check that the expected condition occurred.
      ...and here is a failing test, TDD-riffic!
    */
    expect(someCondition).toBe(true); // Replace 'someCondition' with actual test condition
  });
});
`;
}

export { generateComponentContent, generateTestContent };
