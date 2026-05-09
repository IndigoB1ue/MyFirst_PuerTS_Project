import * as UE from 'ue';
import {$ref, blueprint} from 'puerts';

const uclass = UE.Class.Load("/Game/ThirdPerson/Blueprints/BP_Cube.BP_Cube_C");
const jsClass = blueprint.tojs<typeof UE.Game.ThirdPerson.Blueprints.BP_Cube.BP_Cube_C>(uclass);

interface TS_Cube extends UE.Game.ThirdPerson.Blueprints.BP_Cube.BP_Cube_C{};

let bShouldRotation : boolean = false;

class TS_Cube implements TS_Cube{
    ReceiveBeginPlay(): void {
        setTimeout(() => {
           this.K2_SetActorLocation(new UE.Vector(1100,-10,410),
           false,
           $ref<UE.HitResult>(),
           false);

           bShouldRotation = true; 
        }, 3000);
        
    }

    ReceiveTick(DeltaSeconds: number): void {
        if (bShouldRotation)
        {
            this.K2_AddActorLocalRotation(new UE.Rotator(0,0,  DeltaSeconds * 50),
            false,
            $ref<UE.HitResult>(),
            false);
        }
    }

}

blueprint.mixin(jsClass,TS_Cube);