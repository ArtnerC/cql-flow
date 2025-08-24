window.BENCHMARK_DATA = {
  "lastUpdate": 1756005949599,
  "repoUrl": "https://github.com/ArtnerC/cql-flow",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T00:49:16-04:00",
          "tree_id": "b3d8883dc9fa5827702bf1b07cf7beb6b620f262",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755751809860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25559.43932497904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684249435458306",
            "extra": "mean: 39.12448889372576 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3578.688356237685,
            "unit": "iter/sec",
            "range": "stddev: 0.00034060842953538404",
            "extra": "mean: 279.4319874925659 usec\nrounds: 3198"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2059.977439891395,
            "unit": "iter/sec",
            "range": "stddev: 0.00043521955140865337",
            "extra": "mean: 485.4422095286254 usec\nrounds: 1637"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8139.036447176905,
            "unit": "iter/sec",
            "range": "stddev: 0.000007145117047531252",
            "extra": "mean: 122.86466665803648 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6004.049628883171,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324784649610589",
            "extra": "mean: 166.55425284784206 usec\nrounds: 3599"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30332.234918772872,
            "unit": "iter/sec",
            "range": "stddev: 0.000007852163805217288",
            "extra": "mean: 32.96822679495641 usec\nrounds: 14458"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13367.421059013071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676872485550811",
            "extra": "mean: 74.80874550037035 usec\nrounds: 8723"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3866.3162077550237,
            "unit": "iter/sec",
            "range": "stddev: 0.000019480731701563664",
            "extra": "mean: 258.6441321054415 usec\nrounds: 2498"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2036.8051673194286,
            "unit": "iter/sec",
            "range": "stddev: 0.000029835984276725288",
            "extra": "mean: 490.9649759559804 usec\nrounds: 1830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1053.3380842974645,
            "unit": "iter/sec",
            "range": "stddev: 0.000026741564339105026",
            "extra": "mean: 949.3628065930617 usec\nrounds: 910"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32978.463964202696,
            "unit": "iter/sec",
            "range": "stddev: 0.000010283299467151196",
            "extra": "mean: 30.32281919150253 usec\nrounds: 15851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24396.068182720395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010218444692657317",
            "extra": "mean: 40.99021172224361 usec\nrounds: 13291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18900.59092811173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001761122371412207",
            "extra": "mean: 52.90839867406755 usec\nrounds: 11616"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14742.3651016865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001536190306010058",
            "extra": "mean: 67.8317212402779 usec\nrounds: 9962"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 643.6055857336025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008032302485676215",
            "extra": "mean: 1.5537466146446937 msec\nrounds: 519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755832772512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24901.508741922975,
            "unit": "iter/sec",
            "range": "stddev: 0.000019617763086261486",
            "extra": "mean: 40.158209302251976 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3558.553937379231,
            "unit": "iter/sec",
            "range": "stddev: 0.00030860160805567643",
            "extra": "mean: 281.01302315413835 usec\nrounds: 3196"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2032.1842518463366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006927963605644302",
            "extra": "mean: 492.0813647145687 usec\nrounds: 1434"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8055.979389534938,
            "unit": "iter/sec",
            "range": "stddev: 0.000006009683278998272",
            "extra": "mean: 124.13140000073025 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5984.343364389955,
            "unit": "iter/sec",
            "range": "stddev: 0.000013732957577817933",
            "extra": "mean: 167.1027110427077 usec\nrounds: 3568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30296.796500561268,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889336334748625",
            "extra": "mean: 33.006790007698484 usec\nrounds: 14391"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13632.82380739959,
            "unit": "iter/sec",
            "range": "stddev: 0.000010889702124149216",
            "extra": "mean: 73.35237468977061 usec\nrounds: 7254"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3882.46377828455,
            "unit": "iter/sec",
            "range": "stddev: 0.000015155678327154686",
            "extra": "mean: 257.5684042677266 usec\nrounds: 3374"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.4976832161115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000257991421289632",
            "extra": "mean: 492.00548087103135 usec\nrounds: 1516"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1034.1960709203604,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202106593867484",
            "extra": "mean: 966.9346346578861 usec\nrounds: 906"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31987.041583739072,
            "unit": "iter/sec",
            "range": "stddev: 0.000011157649408924244",
            "extra": "mean: 31.2626598299844 usec\nrounds: 16236"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23806.67342653616,
            "unit": "iter/sec",
            "range": "stddev: 0.000010316339028904127",
            "extra": "mean: 42.00502867760382 usec\nrounds: 13181"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18665.11384360187,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546499870133932",
            "extra": "mean: 53.57588538592201 usec\nrounds: 9135"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15520.307956380311,
            "unit": "iter/sec",
            "range": "stddev: 0.00001109709719508777",
            "extra": "mean: 64.43171120125265 usec\nrounds: 9865"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 678.9161160242072,
            "unit": "iter/sec",
            "range": "stddev: 0.00014005811374306342",
            "extra": "mean: 1.4729360172742525 msec\nrounds: 521"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755919030754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25006.635283472213,
            "unit": "iter/sec",
            "range": "stddev: 0.000021821603588798788",
            "extra": "mean: 39.989386363423954 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3536.549967158969,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411078092346946",
            "extra": "mean: 282.76145092991123 usec\nrounds: 3118"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2018.4992094915656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005885691969119044",
            "extra": "mean: 495.4175831715522 usec\nrounds: 1545"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8062.87754422587,
            "unit": "iter/sec",
            "range": "stddev: 0.000010851528270458282",
            "extra": "mean: 124.02520000023287 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5979.528886764034,
            "unit": "iter/sec",
            "range": "stddev: 0.000013810979457858909",
            "extra": "mean: 167.23725546565157 usec\nrounds: 3339"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30718.62430396033,
            "unit": "iter/sec",
            "range": "stddev: 0.000007638928535437367",
            "extra": "mean: 32.553541138594454 usec\nrounds: 10574"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13488.646031109025,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305251895782256",
            "extra": "mean: 74.13642538277661 usec\nrounds: 6989"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3852.45581210815,
            "unit": "iter/sec",
            "range": "stddev: 0.000013454250756250791",
            "extra": "mean: 259.5746839865186 usec\nrounds: 3291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.1041040576902,
            "unit": "iter/sec",
            "range": "stddev: 0.00002257768805659701",
            "extra": "mean: 493.558054592207 usec\nrounds: 1557"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.369382701222,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006865118823181",
            "extra": "mean: 964.9069305710017 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32855.81650897962,
            "unit": "iter/sec",
            "range": "stddev: 0.000010358794699083727",
            "extra": "mean: 30.436011222752487 usec\nrounds: 15326"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23564.291056636685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011981868351090686",
            "extra": "mean: 42.43709253108883 usec\nrounds: 12947"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18689.76205808075,
            "unit": "iter/sec",
            "range": "stddev: 0.00019010671991922864",
            "extra": "mean: 53.505229060293885 usec\nrounds: 11748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15130.952017627164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001196396889927296",
            "extra": "mean: 66.08969474194527 usec\nrounds: 10270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 657.6593272618195,
            "unit": "iter/sec",
            "range": "stddev: 0.0004112801280070543",
            "extra": "mean: 1.5205440849801737 msec\nrounds: 506"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756005949123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25514.31182778666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001776758844832577",
            "extra": "mean: 39.193688889187996 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3472.743756989262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003291187346176344",
            "extra": "mean: 287.9567483167726 usec\nrounds: 3119"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1969.9932310470904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005145844250675054",
            "extra": "mean: 507.61595737487903 usec\nrounds: 1478"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7889.011080892146,
            "unit": "iter/sec",
            "range": "stddev: 0.000010046883540118586",
            "extra": "mean: 126.75860000020597 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5808.389053819048,
            "unit": "iter/sec",
            "range": "stddev: 0.000021405387535628753",
            "extra": "mean: 172.16477593602212 usec\nrounds: 3499"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29974.5004617712,
            "unit": "iter/sec",
            "range": "stddev: 0.000008004899372870611",
            "extra": "mean: 33.361690256535795 usec\nrounds: 14851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13219.925269292018,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119573308807875",
            "extra": "mean: 75.64339280516629 usec\nrounds: 7561"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3798.5541595521618,
            "unit": "iter/sec",
            "range": "stddev: 0.000015899974276307923",
            "extra": "mean: 263.25806030310673 usec\nrounds: 3101"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1995.4340283207082,
            "unit": "iter/sec",
            "range": "stddev: 0.000015835380757894533",
            "extra": "mean: 501.14410489509754 usec\nrounds: 1859"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1028.2084497697228,
            "unit": "iter/sec",
            "range": "stddev: 0.000032226055236019615",
            "extra": "mean: 972.5654367302268 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32226.311711373884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001106893535604772",
            "extra": "mean: 31.03054451146087 usec\nrounds: 15423"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24068.55276727895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010376094489170901",
            "extra": "mean: 41.54799042838562 usec\nrounds: 12955"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18938.62481650867,
            "unit": "iter/sec",
            "range": "stddev: 0.00018834969918845703",
            "extra": "mean: 52.802144278622954 usec\nrounds: 10653"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15417.517568233705,
            "unit": "iter/sec",
            "range": "stddev: 0.000010674922732018015",
            "extra": "mean: 64.86128493606537 usec\nrounds: 8995"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 686.6785769507911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000558781881290252",
            "extra": "mean: 1.4562854202333186 msec\nrounds: 514"
          }
        ]
      }
    ]
  }
}