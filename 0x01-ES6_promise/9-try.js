export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const val = mathFunction();
    if (val) queue.push(val);
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
