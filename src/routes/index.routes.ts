import { Router, response } from "express"
import { createSupplierController } from "../useCases/CreateSupplier"
import { createProductController } from "../useCases/CreateProduct"
import { createPersonController } from "../useCases/CreatePerson"
import { createSupplyController } from "../useCases/CreateSupply"
import { findAllPersonController } from "../useCases/FindAllPerson"
import { findAllSuppliersController } from "../useCases/FindAllSupplier"
import { findAllProductsController } from "../useCases/FindAllProduct"
import { findAllSuppliesController } from "../useCases/FindAllSupply"
import { findByIdPersonController } from "../useCases/FindByIdPerson"
import { findByIdSupplierController } from "../useCases/FindByIdSupplier"
import { findByIdProductController } from "../useCases/FindByIdProduct"
import { findByIdSupplyController } from "../useCases/FindByIdSupply"
import { deletePersonController } from "../useCases/DeletePerson"
import { updatePersonController } from "../useCases/UpdatePerson"
import { deleteProductController } from "../useCases/DeleteProduct"
import { updateProductController } from "../useCases/UpdateProduct"

const router: Router = Router()

router.post("/supplier", (request, response) => createSupplierController.handle(request, response))
router.post("/product", (request, response) => createProductController.handle(request, response))
router.post("/person", (request, response) => createPersonController.handle(request, response))
router.post("/supply", (request, response) => createSupplyController.handle(request, response))

router.get("/supplier", (request, response) => findAllSuppliersController.handle(request, response)) 
router.get("/person", (request, response) => findAllPersonController.handle(request, response))
router.get("/product", (request, response) => findAllProductsController.handle(request, response))
router.get("/supply", (request, response) => findAllSuppliesController.handle(request, response))

router.get("/supplier/:id", (request, response) => findByIdSupplierController.handle(request, response))
router.get("/person/:id", (request, response) => findByIdPersonController.handle(request, response))
router.get("/product/:id", (request, response) => findByIdProductController.handle(request, response))
router.get("/supply/:id", (request, response) => findByIdSupplyController.handle(request, response))

router.delete("/person/:id", (request, response) => deletePersonController.handle(request, response))
router.delete("/product/:id", (request, response) => deleteProductController.handle(request, response))

router.put("/person/:id", (request, response) => updatePersonController.handle(request, response))
router.put("/product/:id", (request, response) => updateProductController.handle(request, response))

export default router