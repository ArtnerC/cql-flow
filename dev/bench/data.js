window.BENCHMARK_DATA = {
  "lastUpdate": 1756611214143,
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
        "date": 1756092221055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24186.10991638597,
            "unit": "iter/sec",
            "range": "stddev: 0.000023212213223730715",
            "extra": "mean: 41.3460454557227 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3383.715410569246,
            "unit": "iter/sec",
            "range": "stddev: 0.00030916261492567964",
            "extra": "mean: 295.5331281337779 usec\nrounds: 2872"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1950.0300782307895,
            "unit": "iter/sec",
            "range": "stddev: 0.00041964875257328364",
            "extra": "mean: 512.8126028226567 usec\nrounds: 1488"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8018.54314827661,
            "unit": "iter/sec",
            "range": "stddev: 0.000013035023901248378",
            "extra": "mean: 124.71093333393429 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5726.799306252279,
            "unit": "iter/sec",
            "range": "stddev: 0.000013488070656052093",
            "extra": "mean: 174.61760863668508 usec\nrounds: 3682"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29555.817060942674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000078259302747801",
            "extra": "mean: 33.834287102875486 usec\nrounds: 14918"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12977.015600007164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001094202275040312",
            "extra": "mean: 77.05932017215484 usec\nrounds: 6965"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3714.072038416969,
            "unit": "iter/sec",
            "range": "stddev: 0.00001566709027781536",
            "extra": "mean: 269.24625846143397 usec\nrounds: 3250"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1951.2299815665226,
            "unit": "iter/sec",
            "range": "stddev: 0.000020028179590054842",
            "extra": "mean: 512.4972501689225 usec\nrounds: 1479"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1002.6405069543557,
            "unit": "iter/sec",
            "range": "stddev: 0.000024848027391737356",
            "extra": "mean: 997.3664469607589 usec\nrounds: 839"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31022.19380043261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001141986895402886",
            "extra": "mean: 32.234986552951476 usec\nrounds: 12419"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23669.30075149926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010229242160515928",
            "extra": "mean: 42.248818860297675 usec\nrounds: 13266"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18961.693785460873,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089637045952066",
            "extra": "mean: 52.7379047101142 usec\nrounds: 11953"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 13863.398381378243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198076163055755",
            "extra": "mean: 72.13238576071159 usec\nrounds: 6447"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 677.4392493698704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551052977782037",
            "extra": "mean: 1.4761471245283826 msec\nrounds: 530"
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
        "date": 1756178397315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24374.584178048848,
            "unit": "iter/sec",
            "range": "stddev: 0.00001984742405725855",
            "extra": "mean: 41.02634090884617 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3522.1237300683897,
            "unit": "iter/sec",
            "range": "stddev: 0.00034681499707213073",
            "extra": "mean: 283.9196111888388 usec\nrounds: 2860"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2025.7662493220864,
            "unit": "iter/sec",
            "range": "stddev: 0.00045261985550644257",
            "extra": "mean: 493.64036958096494 usec\nrounds: 1361"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8032.532828951575,
            "unit": "iter/sec",
            "range": "stddev: 0.000008812691518232006",
            "extra": "mean: 124.49373333348981 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5957.458377771548,
            "unit": "iter/sec",
            "range": "stddev: 0.000012409156959924968",
            "extra": "mean: 167.8568168820444 usec\nrounds: 3637"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30630.76530164931,
            "unit": "iter/sec",
            "range": "stddev: 0.000007822862185562722",
            "extra": "mean: 32.64691528768807 usec\nrounds: 13174"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13469.516459154818,
            "unit": "iter/sec",
            "range": "stddev: 0.000011683432339867288",
            "extra": "mean: 74.24171484050049 usec\nrounds: 7210"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3852.881563779482,
            "unit": "iter/sec",
            "range": "stddev: 0.000013418977779226983",
            "extra": "mean: 259.5460004275477 usec\nrounds: 2339"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2027.2681565372427,
            "unit": "iter/sec",
            "range": "stddev: 0.000020574386661618142",
            "extra": "mean: 493.274654749222 usec\nrounds: 1874"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1038.4589633354062,
            "unit": "iter/sec",
            "range": "stddev: 0.000034931835519587275",
            "extra": "mean: 962.9653508773416 usec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32711.445388740416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010250687426395277",
            "extra": "mean: 30.570339773008293 usec\nrounds: 15684"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23974.093217193327,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221702810050263",
            "extra": "mean: 41.71169232306301 usec\nrounds: 10030"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18757.66989075218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019770129777678958",
            "extra": "mean: 53.311525675852494 usec\nrounds: 11431"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15530.140087592728,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089842162698153",
            "extra": "mean: 64.39091948687029 usec\nrounds: 9899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 682.9226883035782,
            "unit": "iter/sec",
            "range": "stddev: 0.000053304095678301616",
            "extra": "mean: 1.464294593117211 msec\nrounds: 494"
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
        "date": 1756264635850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23549.668990478447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000237698798049443",
            "extra": "mean: 42.46344186002435 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3480.2832283707585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047450120208196",
            "extra": "mean: 287.3329365403789 usec\nrounds: 2931"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2038.9014311646895,
            "unit": "iter/sec",
            "range": "stddev: 0.0007179054565611182",
            "extra": "mean: 490.46019818072625 usec\nrounds: 1539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7963.144444043617,
            "unit": "iter/sec",
            "range": "stddev: 0.000008718905074038441",
            "extra": "mean: 125.57853333277079 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5987.272013529188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004092054883416506",
            "extra": "mean: 167.02097344839882 usec\nrounds: 3013"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30497.52856471692,
            "unit": "iter/sec",
            "range": "stddev: 0.000008138350800085063",
            "extra": "mean: 32.78954220431212 usec\nrounds: 12167"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13644.388912106811,
            "unit": "iter/sec",
            "range": "stddev: 0.000010713326617013885",
            "extra": "mean: 73.29020056828557 usec\nrounds: 7743"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3859.168292511319,
            "unit": "iter/sec",
            "range": "stddev: 0.000014251279875554416",
            "extra": "mean: 259.12319033624186 usec\nrounds: 3063"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.8359069940861,
            "unit": "iter/sec",
            "range": "stddev: 0.000023778384946245024",
            "extra": "mean: 493.3798520883012 usec\nrounds: 1724"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1041.465393549764,
            "unit": "iter/sec",
            "range": "stddev: 0.000030457885865342422",
            "extra": "mean: 960.1855291528872 usec\nrounds: 909"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32819.01280193586,
            "unit": "iter/sec",
            "range": "stddev: 0.000010211692440796509",
            "extra": "mean: 30.470142597982537 usec\nrounds: 11578"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24224.49612729103,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190088604646541",
            "extra": "mean: 41.28052838520806 usec\nrounds: 9283"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19579.005301448164,
            "unit": "iter/sec",
            "range": "stddev: 0.000010882807525198736",
            "extra": "mean: 51.0751176887436 usec\nrounds: 8463"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14710.55720779163,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559160840597757",
            "extra": "mean: 67.97839034066892 usec\nrounds: 9835"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 662.4010352241978,
            "unit": "iter/sec",
            "range": "stddev: 0.00012157633497125266",
            "extra": "mean: 1.5096594763948967 msec\nrounds: 466"
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
        "date": 1756351877991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25117.710724894434,
            "unit": "iter/sec",
            "range": "stddev: 0.000020744310045524665",
            "extra": "mean: 39.81254545657655 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3577.949975185522,
            "unit": "iter/sec",
            "range": "stddev: 0.00029897956103891324",
            "extra": "mean: 279.48965383400827 usec\nrounds: 3169"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2053.673026120006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004157430928508746",
            "extra": "mean: 486.93243144420853 usec\nrounds: 1641"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7991.194768893113,
            "unit": "iter/sec",
            "range": "stddev: 0.000007810481132411465",
            "extra": "mean: 125.13773333277338 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5939.50010083134,
            "unit": "iter/sec",
            "range": "stddev: 0.000014063053691333598",
            "extra": "mean: 168.36433757447568 usec\nrounds: 3694"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30390.656301798932,
            "unit": "iter/sec",
            "range": "stddev: 0.000008275858289433247",
            "extra": "mean: 32.90485042736002 usec\nrounds: 12870"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13338.591334859417,
            "unit": "iter/sec",
            "range": "stddev: 0.000011465080738872513",
            "extra": "mean: 74.97043540021909 usec\nrounds: 7322"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3773.1592669192664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000237650677067602",
            "extra": "mean: 265.0298938524496 usec\nrounds: 2440"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2006.9818894645168,
            "unit": "iter/sec",
            "range": "stddev: 0.000020812013002349428",
            "extra": "mean: 498.26059978389253 usec\nrounds: 1854"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1031.0182687332901,
            "unit": "iter/sec",
            "range": "stddev: 0.00002900123436416528",
            "extra": "mean: 969.9149184122612 usec\nrounds: 907"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31437.169936098366,
            "unit": "iter/sec",
            "range": "stddev: 0.000011193936866080851",
            "extra": "mean: 31.80947909855364 usec\nrounds: 14377"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23554.59972800086,
            "unit": "iter/sec",
            "range": "stddev: 0.000010255066031799046",
            "extra": "mean: 42.4545528919023 usec\nrounds: 10512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18943.102711235675,
            "unit": "iter/sec",
            "range": "stddev: 0.0001785886209706564",
            "extra": "mean: 52.78966256181848 usec\nrounds: 11531"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15469.4539984315,
            "unit": "iter/sec",
            "range": "stddev: 0.000010811637630367135",
            "extra": "mean: 64.64352265447724 usec\nrounds: 9689"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 682.4182071453556,
            "unit": "iter/sec",
            "range": "stddev: 0.00006318129863733978",
            "extra": "mean: 1.4653770804022512 msec\nrounds: 597"
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
        "date": 1756438241009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24551.35075120272,
            "unit": "iter/sec",
            "range": "stddev: 0.000017141456434725215",
            "extra": "mean: 40.73095652185296 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3333.085657782168,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216318599813153",
            "extra": "mean: 300.0222924559938 usec\nrounds: 3009"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1959.812933484893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784840986236669",
            "extra": "mean: 510.2527812293919 usec\nrounds: 1513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7997.061346545579,
            "unit": "iter/sec",
            "range": "stddev: 0.000009210011725240399",
            "extra": "mean: 125.04593333299377 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5621.452664767246,
            "unit": "iter/sec",
            "range": "stddev: 0.000012690325814871167",
            "extra": "mean: 177.88996183629783 usec\nrounds: 3616"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29434.454273982257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008397158400484303",
            "extra": "mean: 33.973791078026586 usec\nrounds: 15714"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12991.256260045206,
            "unit": "iter/sec",
            "range": "stddev: 0.000010752349777413754",
            "extra": "mean: 76.97484985155087 usec\nrounds: 8758"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3654.9930111241833,
            "unit": "iter/sec",
            "range": "stddev: 0.000012559728968903493",
            "extra": "mean: 273.59833437613753 usec\nrounds: 2557"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1936.4757027490202,
            "unit": "iter/sec",
            "range": "stddev: 0.000015003571509770019",
            "extra": "mean: 516.4020382906949 usec\nrounds: 1802"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 996.1557776040142,
            "unit": "iter/sec",
            "range": "stddev: 0.000019587342256024087",
            "extra": "mean: 1.0038590574711437 msec\nrounds: 870"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32134.406010333394,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031516358422942",
            "extra": "mean: 31.119293123962898 usec\nrounds: 16812"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23614.98365778614,
            "unit": "iter/sec",
            "range": "stddev: 0.000010296086369357583",
            "extra": "mean: 42.345995851252184 usec\nrounds: 13980"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18112.130680585506,
            "unit": "iter/sec",
            "range": "stddev: 0.00017527973552709016",
            "extra": "mean: 55.21161577483016 usec\nrounds: 12222"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14771.726036711241,
            "unit": "iter/sec",
            "range": "stddev: 0.00001148997087932783",
            "extra": "mean: 67.69689591553234 usec\nrounds: 10136"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 666.560506549827,
            "unit": "iter/sec",
            "range": "stddev: 0.00009120952890267761",
            "extra": "mean: 1.5002388983050974 msec\nrounds: 531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T15:24:28-04:00",
          "tree_id": "49607a7615dbf77e514db5ba2609b98721f72409",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756495515629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25682.04374277132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777607336187192",
            "extra": "mean: 38.93771111115206 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3525.65686404751,
            "unit": "iter/sec",
            "range": "stddev: 0.00035463673581875545",
            "extra": "mean: 283.63508944883085 usec\nrounds: 3175"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2107.8594103804044,
            "unit": "iter/sec",
            "range": "stddev: 0.00047811041865859397",
            "extra": "mean: 474.41494203806053 usec\nrounds: 1570"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8125.4834662794765,
            "unit": "iter/sec",
            "range": "stddev: 0.000006339366044717299",
            "extra": "mean: 123.06959999979958 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5996.645201418984,
            "unit": "iter/sec",
            "range": "stddev: 0.00001307501078032506",
            "extra": "mean: 166.75990765025927 usec\nrounds: 3660"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31441.11732245782,
            "unit": "iter/sec",
            "range": "stddev: 0.000008934059854744346",
            "extra": "mean: 31.805485464911204 usec\nrounds: 15239"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13551.943980881297,
            "unit": "iter/sec",
            "range": "stddev: 0.000021511160077107722",
            "extra": "mean: 73.79015153920146 usec\nrounds: 8803"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3839.822729056956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001658048129679154",
            "extra": "mean: 260.4286891769078 usec\nrounds: 3317"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1903.562722522575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000902235255320601",
            "extra": "mean: 525.330732824403 usec\nrounds: 1834"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.7608383593058,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644924007250166",
            "extra": "mean: 967.3417321429123 usec\nrounds: 896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34809.63859942668,
            "unit": "iter/sec",
            "range": "stddev: 0.000010344843943910034",
            "extra": "mean: 28.727675443791313 usec\nrounds: 15153"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25256.934710306537,
            "unit": "iter/sec",
            "range": "stddev: 0.000010573997893955397",
            "extra": "mean: 39.59308647188815 usec\nrounds: 9240"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19456.50628119123,
            "unit": "iter/sec",
            "range": "stddev: 0.00020026641224047903",
            "extra": "mean: 51.39668887865591 usec\nrounds: 10835"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15701.02450661067,
            "unit": "iter/sec",
            "range": "stddev: 0.000011076656920803566",
            "extra": "mean: 63.69011140508479 usec\nrounds: 6804"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 679.3509045205112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000553161561040998",
            "extra": "mean: 1.4719933297296546 msec\nrounds: 555"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756524275446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25443.75319113732,
            "unit": "iter/sec",
            "range": "stddev: 0.000021960781609866808",
            "extra": "mean: 39.30237777767489 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3477.129179838473,
            "unit": "iter/sec",
            "range": "stddev: 0.000492835637500621",
            "extra": "mean: 287.59357167353045 usec\nrounds: 2916"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2075.230591206735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129427142887046",
            "extra": "mean: 481.87416099070975 usec\nrounds: 1615"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8123.595633371349,
            "unit": "iter/sec",
            "range": "stddev: 0.000008217039445190613",
            "extra": "mean: 123.09820000050803 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5946.93931733302,
            "unit": "iter/sec",
            "range": "stddev: 0.00001158695919429278",
            "extra": "mean: 168.15372524239285 usec\nrounds: 3403"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31342.477633720446,
            "unit": "iter/sec",
            "range": "stddev: 0.000007680306114184009",
            "extra": "mean: 31.905582311850466 usec\nrounds: 11748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13500.581024108316,
            "unit": "iter/sec",
            "range": "stddev: 0.000011392711252148888",
            "extra": "mean: 74.07088615032757 usec\nrounds: 7141"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3770.0715732220106,
            "unit": "iter/sec",
            "range": "stddev: 0.000013878612261860983",
            "extra": "mean: 265.24695369254533 usec\nrounds: 2505"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1992.9726782267662,
            "unit": "iter/sec",
            "range": "stddev: 0.00002230896207267356",
            "extra": "mean: 501.7630251156996 usec\nrounds: 1513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1028.0204033412745,
            "unit": "iter/sec",
            "range": "stddev: 0.000033415917820503414",
            "extra": "mean: 972.743339285677 usec\nrounds: 896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34388.12924071687,
            "unit": "iter/sec",
            "range": "stddev: 0.000010176559052658845",
            "extra": "mean: 29.079802306197028 usec\nrounds: 15003"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25061.574436882747,
            "unit": "iter/sec",
            "range": "stddev: 0.000010184961612148963",
            "extra": "mean: 39.90172295513545 usec\nrounds: 13265"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19316.350574830893,
            "unit": "iter/sec",
            "range": "stddev: 0.00019478121353109156",
            "extra": "mean: 51.76961331935003 usec\nrounds: 11472"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15229.820525155668,
            "unit": "iter/sec",
            "range": "stddev: 0.000012642692451054165",
            "extra": "mean: 65.66065557688368 usec\nrounds: 9889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 629.5682958934457,
            "unit": "iter/sec",
            "range": "stddev: 0.00020949611069643367",
            "extra": "mean: 1.5883900230091157 msec\nrounds: 565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756611213237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25944.52824486627,
            "unit": "iter/sec",
            "range": "stddev: 0.000020430435453798053",
            "extra": "mean: 38.54377272008688 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3513.7693165014584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270352849318284",
            "extra": "mean: 284.59466456826664 usec\nrounds: 3017"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2097.5179603836923,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107563445909009",
            "extra": "mean: 476.7539629634795 usec\nrounds: 1539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8116.790880620039,
            "unit": "iter/sec",
            "range": "stddev: 0.000007209724159031627",
            "extra": "mean: 123.20140000004662 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6015.809658120753,
            "unit": "iter/sec",
            "range": "stddev: 0.000013959282065157938",
            "extra": "mean: 166.2286636097434 usec\nrounds: 3490"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31670.592383312796,
            "unit": "iter/sec",
            "range": "stddev: 0.000007558362357464344",
            "extra": "mean: 31.575033011599086 usec\nrounds: 14722"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13826.977991763872,
            "unit": "iter/sec",
            "range": "stddev: 0.000010969159679170583",
            "extra": "mean: 72.32238314081765 usec\nrounds: 8660"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3853.938282184906,
            "unit": "iter/sec",
            "range": "stddev: 0.000015864017167743067",
            "extra": "mean: 259.47483503370273 usec\nrounds: 3334"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.7108032450067,
            "unit": "iter/sec",
            "range": "stddev: 0.000015399118259209858",
            "extra": "mean: 491.9538964439045 usec\nrounds: 1603"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.0556393491404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430020378630033",
            "extra": "mean: 962.4123695882112 usec\nrounds: 901"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35004.397579272896,
            "unit": "iter/sec",
            "range": "stddev: 0.000010168054316048546",
            "extra": "mean: 28.56783916178945 usec\nrounds: 16215"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25663.759877901128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009930226312079984",
            "extra": "mean: 38.9654518573131 usec\nrounds: 13730"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19719.918075206377,
            "unit": "iter/sec",
            "range": "stddev: 0.00017614895796145435",
            "extra": "mean: 50.71014981838532 usec\nrounds: 12108"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15800.864675519713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656523089066685",
            "extra": "mean: 63.28767574025872 usec\nrounds: 10103"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 678.6866710002342,
            "unit": "iter/sec",
            "range": "stddev: 0.00008987276019880291",
            "extra": "mean: 1.4734339758378059 msec\nrounds: 538"
          }
        ]
      }
    ]
  }
}