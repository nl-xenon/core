import { generate } from "openapi-typescript-codegen";

export async function generateAPITypes(schemaPath: string, outputDir: string) {
  const schema = await fetch(schemaPath).then((res) => res.json());

  await generate({
    input: schema,
    output: outputDir,
  });

  console.log("Types generated at", outputDir);
}
