import { requiresLinking } from '@angular-devkit/build-angular/src/tools/babel/webpack-loader.js';
import angularApplicationPreset from '@angular-devkit/build-angular/src/tools/babel/presets/application.js';

import { createJitResourceTransformer } from '@angular-devkit/build-angular/src/tools/esbuild/angular/jit-resource-transformer.js';
import { CompilerPluginOptions } from '@angular-devkit/build-angular/src/tools/esbuild/angular/compiler-plugin.js';
import { JavaScriptTransformer } from '@angular-devkit/build-angular/src/tools/esbuild/javascript-transformer.js';
import { SourceFileCache } from '@angular-devkit/build-angular/src/tools/esbuild/angular/compiler-plugin.js';

export {
  requiresLinking,
  angularApplicationPreset,
  createJitResourceTransformer,
  CompilerPluginOptions,
  JavaScriptTransformer,
  SourceFileCache,
};
