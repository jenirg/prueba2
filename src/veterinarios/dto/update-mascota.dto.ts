import { PartialType } from "@nestjs/swagger";
import CreateVeterinarioDto from "./create-veterinario.dto";

class UpdateVeterinarioDto extends PartialType(CreateVeterinarioDto) {}
export default UpdateVeterinarioDto;