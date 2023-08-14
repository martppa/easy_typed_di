# EasyTypedDI

Simple service locator for TypeScript.

## Description

EasyTypedDI is a service locator intended to provide dependencies to small projects or for learning purposes. It's specially designed to do not pollute your code with annoying and unconfortable tags or code snippeds related to DI. It's a simple solution to keep everything clean and separated. 

## Installation
To install this package... meh, just copy the code and you are good to go. Anyway, you can always run the following command:
```
npm install easy_typed_di
```

## Usage
Let's see really quick how to use this.

### Registering
To register your dependencies you only need to use `register()` function. Register function receives a name for your object and a creator lambda, you can also create singletons by setting `singleton` parameter to true (default false). To satisfy any dependency just use the `inject()` function
```
import { register, inject } from 'easy_typed_di/dist/EasyDI'
import { DataBaseManager } from 'src/main/db/manager'
import { MongoDataBaseManager } from 'src/main/db/manager/mongo'
import { UuidGenerator } from 'src/main/uuid/generator'
import { NativeUuidGenerator } from 'src/main/uuid/generator/native'
 
export const DATABASE_MANAGER = "DatabaseManager"
export const UUID_GENERATOR = "UuidGenerator"

export default function mainModule() {
    register<DataBaseManager>(DATABASE_MANAGER, () => new MongoDataBaseManager(inject(UUID_GENERATOR)))
    register<UuidGenerator>(UUID_GENERATOR, () => new NativeUuidGenerator())
}
```

### Injecting
To provide your dependencies you only have to use `inject()` function which expects the name of your dependency.
```
export default class ProfileApplication extends Application {

    private databaseManager: DatabaseManager
    private uuidGenerator: UuidGenerator
    private sessionReceiver: CommunicationDevice
    private networkController: CommunicationDevice
    private networkService: CommunicationDevice

    public constructor() {
        super()
        this.initDependencies()
        this.databaseManager = inject(DATABASE_MANAGER)
        this.uuidGenerator = inject(UUID_GENERATOR)
        ...
    }

    private initDependencies() {
        mainModule()
    }
    ...
}
```

# License - MIT

Copyright 2023 Asere.net

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.